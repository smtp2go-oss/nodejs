import SMTP2GOApiClient from "./client";
import SMTP2GOService from "./service";
import NodeMailService from "./nodeMailService";

export { SMTP2GOApiClient as ApiClient };
export { SMTP2GOService as Service };
export { NodeMailService };

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


export { default as Address } from './types/address';
export * from './types/addressCollection';
export * from './types/addressType';
export { default as Attachment } from './types/attachment';
export * from './types/attachmentCollection';
export { default as Header } from './types/header';
export * from './types/headerCollection';


