import 'dotenv/config';
import SMTP2GOApi from 'smtp2go-nodejs';

const api = SMTP2GOApi(process.env.APIKEY!);

const s = api.service('stats/email_cycle');
try {
const r = await api.client().consume(s);
console.log(r.data);
} catch (err: unknown) {
    console.log(err);
}
