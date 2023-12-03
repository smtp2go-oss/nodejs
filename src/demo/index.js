require('dotenv').config();
const SMTP2GOApi = require('../../build/index.js').default;
const api = SMTP2GOApi(process.env.APIKEY);

const mailService = api.mail()
    .to({ email: process.env.TO_EMAIL, name: "Recipient" })
    .from({ email: process.env.FROM_EMAIL, name: "Sender" })
    .subject('Testing')
    .html('<h1>Hello World</h1><img src="cid:a-cat"/><p>This is a test html email!</p>')
    .attach(require('path').resolve(__dirname, '../lib/tests/files/test.txt'))
    .inline('a-cat', require('path').resolve(__dirname, '../lib/tests/files/cat.jpg'));

const res = api.client().consume(mailService);
res.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});