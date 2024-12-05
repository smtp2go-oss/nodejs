import SMTP2GOApiClient from "./client";
import SMTP2GOService from "./service";
import MailService from "./mailService";
import MailAttachment from "./mailAttachment";
import InlineAttachment from "./inlineAttachment";

export { SMTP2GOApiClient as ApiClient };
export { SMTP2GOService as Service };
export { MailService, MailAttachment, InlineAttachment };

export default function SMTP2GOApi(apiKey: string) {
  return {
    service: function (endpoint: string) {
      return new SMTP2GOService(endpoint);
    },
    mail: function () {
      return new MailService();
    },
    client: function () {
      return new SMTP2GOApiClient(apiKey);
    },
  };
}


export * from './types/address';
export * from './types/addressCollection';
export * from './types/addressType';
export * from './types/attachment';
export * from './types/attachmentCollection';
export * from './types/header'; 
export * from './types/headerCollection';


