## SMTP2GO-Node API Wrapper

This library provides a simple way to send email via the SMTP2GO API and also access other endpoints in the API in a standard way.

### Installation

`npm i smtp2go-nodejs`

### Example Code - Sending an Email

```javascript
import SMTP2GOApi from 'smtp2go-nodejs';

const api = SMTP2GOApi(process.env.APIKEY);

const mailService = api.mail()
    .to({ email: 'to@address.dev',name:"Optional Name" })
    .cc({ email: 'cc@address.dev' })
    .from({ email: 'from@address.dev' })
    .subject('Testing')
    .html(`<h1>Hello World</h1>
    <img src="cid:a-cat"/>
    <p>This is a test html email!</p>`)
    .attach(require('path').resolve(__dirname, './files/test.txt'))
    .inline('a-cat', require('path').resolve(__dirname, './files/cat.jpg'));

api.client().consume(mailService);

```
