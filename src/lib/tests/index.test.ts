import { ApiClient, Service } from '../index';
require('dotenv').config();


it('The service forms arguments to the api correctly', async () => {
  const s = new Service('users/email_bounces', new Map([['test', 'param']]));
  const b = await s.buildRequestBody();
  expect(b.test).toBe('param');
});

it('Makes a valid request to the API', async () => {
  const c = new ApiClient(process.env.APIKEY);
  const res = await c.consume(new Service('stats/email_bounces'));
  expect(res.data).toHaveProperty('emails');
});

it('Allows custom headers to be set', async () => {
  const c = new ApiClient(process.env.APIKEY);
  c.setHeaders({ 'X-Custom-Header': 'test' });
  expect(c.getHeaders()).toHaveProperty('X-Custom-Header', 'test');
});

it('Does not allow certain headers to be overwritten', async () => {
  const c = new ApiClient(process.env.APIKEY);
  c.setHeaders({ 'X-Smtp2go-Api': 'test' });
  expect(c.getHeaders()).toHaveProperty('X-Smtp2go-Api', 'smtp2go-nodejs');
});

