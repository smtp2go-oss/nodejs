import SMTP2GOApi, { ApiClient, Service } from '../index';
require('dotenv').config();


it('The service forms arguments to the api correctly', async () => {
  const s = new Service('users/email_bounces', new Map([['test', 'param']]));
  const b = s.buildRequestBody();
  expect(b.test).toBe('param');
});

it('Makes a valid request to the API', async () => {
  const c = new ApiClient(process.env.APIKEY);
  const res = await c.consume(new Service('stats/email_bounces'));
  expect(res.data).toHaveProperty('emails');
});

it('Makes something useful', () => {
  const api = SMTP2GOApi(process.env.APIKEY);
  api.client().consume(api.service('stats/get'));
});



