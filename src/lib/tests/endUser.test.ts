
import SMTP2GOApi from '../index';
require('dotenv').config();

it('Makes something useful', async () => {
    const api = SMTP2GOApi(process.env.APIKEY);
    const res = await api.client().consume(api.service('stats/email_bounces'));
    expect(res.data).toHaveProperty('emails');

});
it('Makes an email send', async () => {
    const api = SMTP2GOApi(process.env.APIKEY);
    const res = await api.client().consume(
        api.mail()
            .to({ email: 'kris@2050.nz' })
            .from({ email: 'sender@2050.nz' })
            .subject('Testing')
            .html('<h1>Hello World</h1>')
    );
    expect(res.data).toHaveProperty('email_id');

});