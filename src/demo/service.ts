import 'dotenv/config';
import SMTP2GOApi from 'smtp2go-nodejs';

const api = SMTP2GOApi(process.env.APIKEY!);

try {
    const r = await api.client().consume(api.service('stats/email_cycle'));
    console.log(r.data);
} catch (err: unknown) {
    console.log(err);
}
