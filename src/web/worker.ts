import SMTP2GOApi from "../../build/index.browser";

self.onmessage = async (e) => {
  const { apikey, to, from, subject, html, attachment } = e.data;
  //console.log('api',SMTP2GOApi); // See what properties are available

  // const SMTP2GOApi = pkg.default ||  pkg; // Try these options

  const api = SMTP2GOApi(apikey);
  const mailService = api.mail()
    .to(to)
    .from(from)
    .subject(subject)
    .html(html);
  if (attachment) {
    mailService.attach(attachment);
  }
  const result = await mailService.buildRequestBody();
  self.postMessage({ success: true, result });
};