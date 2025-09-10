import SMTP2GOApi from '../lib/index';

self.onmessage = async (e) => {
  const { apikey, to, from, subject, html, attachment } = e.data;
  const api = SMTP2GOApi(apikey);
  const mailService = api.mail()
    .to(to)
    .from(from)
    .subject(subject)
    .html(html);
  if (attachment) {
    await mailService.attach(attachment);
  }
  const result = await mailService.buildRequestBody();
  self.postMessage({ success: true, result });
};