import 'dotenv/config';
import SMTP2GOApi from 'smtp2go-nodejs';

const api = SMTP2GOApi(process.env.APIKEY!);

const mailService = api.mail()
    .to({ email: process.env.TO_EMAIL!, name: "Recipient" })
    .from({ email: process.env.FROM_EMAIL!, name: "Sender" })
    .subject('Testing')
    // .cc({ email: process.env.CC_EMAIL!, name: "CC Recipient" })
   .template("6040276", new Map([
        ["username", "Steve"],
        ["product_name", "Widgets"],
        ["action_url", "https://website.localhost"],
        ["login_url", "https://website.localhost/login"],
        ["guide_url", "https://website.localhost/guide"],
        ["support_email", "support@test"],
        ["sender_name", "Bob Widgets"]
    ]));


const res = api.client().consume(mailService);
res.then((res) => {
    console.log(res.config);
    console.log(res.data);
}).catch((err) => {
    console.error(err.data);
});

