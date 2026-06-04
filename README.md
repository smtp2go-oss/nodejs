## SMTP2GO Node API Wrapper

A library for sending email and accessing the [SMTP2GO API](https://developers.smtp2go.com/docs/introduction-guide) from Node.js, browsers, and Web Workers.

### Installation

```
npm i smtp2go-nodejs
```

---

### Node.js

The package supports both ESM and CommonJS.

**ESM**

```javascript
import SMTP2GOApi from "smtp2go-nodejs";
```

**CommonJS**

```javascript
const { default: SMTP2GOApi } = require("smtp2go-nodejs");
```

---

#### Send an email

```javascript
import SMTP2GOApi from "smtp2go-nodejs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const api = SMTP2GOApi(process.env.APIKEY);

const mail = api.mail()
  .to({ email: "recipient@example.com", name: "Recipient" })
  .from({ email: "sender@example.com", name: "Sender" })
  .subject("Hello!")
  .html("<h1>Hello World</h1>")
  .text("Hello World");

const result = await api.client().consume(mail);
console.log(result);
```

#### Attachments and inline images

```javascript
const mail = api.mail()
  .to({ email: "recipient@example.com" })
  .from({ email: "sender@example.com" })
  .subject("Check this out")
  .html('<h1>Hello</h1><img src="cid:my-image" />')
  .attach(resolve(__dirname, "./report.pdf"))
  .inline("my-image", resolve(__dirname, "./image.jpg"));

await api.client().consume(mail);
```

Multiple attachments can be passed as an array:

```javascript
mail.attach([
  resolve(__dirname, "./file1.pdf"),
  resolve(__dirname, "./file2.pdf"),
]);
```

#### CC, BCC, and custom headers

```javascript
const mail = api.mail()
  .to({ email: "recipient@example.com" })
  .cc({ email: "cc@example.com" })
  .bcc([{ email: "bcc1@example.com" }, { email: "bcc2@example.com" }])
  .from({ email: "sender@example.com" })
  .subject("Hello")
  .html("<p>Hello</p>")
  .headers({ header: "Reply-To", value: "replyto@example.com" });

await api.client().consume(mail);
```

#### Send using a template

```javascript
const mail = api.mail()
  .to({ email: "recipient@example.com", name: "Recipient" })
  .from({ email: "sender@example.com", name: "Sender" })
  .subject("Welcome!")
  .template(
    "your-template-id",
    new Map([
      ["username", "Steve"],
      ["action_url", "https://example.com/confirm"],
    ])
  );

await api.client().consume(mail);
```

#### Error handling

```javascript
import SMTP2GOApi, { SMTP2GOError } from "smtp2go-nodejs";

try {
  const result = await api.client().consume(mail);
  console.log(result);
} catch (err) {
  if (err instanceof SMTP2GOError) {
    console.error(`API error ${err.status}:`, err.response);
  } else {
    throw err;
  }
}
```

#### Access other API endpoints

```javascript
const service = api.service("stats/email_bounces", new Map([["days", "7"]]));
const result = await api.client().consume(service);
```

---

### Browser / Web Worker

The package ships a separate browser build that uses the Web `File` API instead of Node's `fs` module. Bundlers (Vite, webpack, etc.) will resolve to it automatically via the `browser` field in `package.json`.

#### Web Worker

```javascript
// worker.js
import SMTP2GOApi from "smtp2go-nodejs";

self.onmessage = async (event) => {
  const { apiKey, to, from, subject, html, file } = event.data;

  const api = SMTP2GOApi(apiKey);

  try {
    const mail = api.mail()
      .to(to)
      .from(from)
      .subject(subject)
      .html(html);

    // file is a File object transferred from the main thread
    if (file) {
      mail.attach(file);
    }

    const result = await api.client().consume(mail);
    self.postMessage({ success: true, result });
  } catch (err) {
    self.postMessage({ success: false, error: err.message });
  }
};
```

```javascript
// main.js — spawning the worker and passing a File from a form input
const worker = new Worker(new URL("./worker.js", import.meta.url), {
  type: "module",
});

const fileInput = document.querySelector('input[type="file"]');

worker.postMessage({
  apiKey: "your-api-key",
  to: { email: "recipient@example.com" },
  from: { email: "sender@example.com" },
  subject: "Hello from a worker",
  html: "<p>Sent from a Web Worker!</p>",
  file: fileInput.files[0],
});

worker.onmessage = ({ data }) => {
  if (data.success) {
    console.log("Sent:", data.result);
  } else {
    console.error("Failed:", data.error);
  }
};
```

#### Inline images in the browser

Pass a `File` object and a content ID (CID), then reference the CID in your HTML:

```javascript
const mail = api.mail()
  .to({ email: "recipient@example.com" })
  .from({ email: "sender@example.com" })
  .subject("Look at this")
  .html('<img src="cid:my-photo" />')
  .inline("my-photo", imageFileObject);

await api.client().consume(mail);
```
