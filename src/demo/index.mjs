// require('dotenv').config();
import 'dotenv/config';
import SMTP2GOApi from 'smtp2go-nodejs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const api = SMTP2GOApi(process.env.APIKEY);

const mailService = api.mail()
    .to({ email: process.env.TO_EMAIL, name: "Recipient" })
    .from({ email: process.env.FROM_EMAIL, name: "Sender" })
    .subject('Testing')
    .headers({header:"Reply-To",value: process.env.FROM_EMAIL})
    .html('<h1>Hello World</h1><img src="cid:a-cat"/><p>This is a test html email!</p>');

    await mailService.attach(resolve(__dirname, '../lib/tests/files/test.txt'))
    .inline('a-cat', resolve(__dirname, '../lib/tests/files/cat.jpg'));

const res = api.client().consume(mailService);
res.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});