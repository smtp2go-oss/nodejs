import SMTP2GOApiClient from "./client";
import SMTP2GOService from "./service";
import NodeMailService from "./nodeMailService";
import MailAttachment from "./mailAttachment.node";
import InlineAttachment from "./inlineAttachment.node";

export { SMTP2GOApiClient as ApiClient };
export { SMTP2GOService as Service };
export { NodeMailService };
export { MailAttachment };
export { InlineAttachment };

export default function SMTP2GOApi(apiKey: string) {
  return {
    service: function (endpoint: string) {
      return new SMTP2GOService(endpoint);
    },
    mail: function () {
      return new NodeMailService();
    },
    client: function () {
      return new SMTP2GOApiClient(apiKey);
    },
  };
}


export type { Address } from './types/address';
export * from './types/addressCollection';
export * from './types/addressType';
export type { Attachment } from './types/attachment';
export * from './types/attachmentCollection';
export type { Header } from './types/header';
export * from './types/headerCollection';


