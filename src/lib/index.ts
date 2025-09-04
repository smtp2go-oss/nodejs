import SMTP2GOApiClient from "./client";
import SMTP2GOService from "./service";
import MailService from "./mailService";
import MailAttachmentNode from "./mailAttachment.node";
import InlineAttachmentNode from "./inlineAttachment.node";
import MailAttachmentWeb from "./mailAttachment.web";
import InlineAttachmentWeb from "./inlineAttachment.web";

const isNode = typeof process !== "undefined" && process.versions != null && process.versions.node != null;

const MailAttachment = isNode ? MailAttachmentNode : MailAttachmentWeb;
const InlineAttachment = isNode ? InlineAttachmentNode : InlineAttachmentWeb;



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


