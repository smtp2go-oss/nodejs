import SMTP2GOApiClient from "./client";
import SMTP2GOService from "./service";
import WebMailService from "./webMailService";

export { SMTP2GOApiClient as ApiClient };
export { SMTP2GOService as Service };
export { WebMailService };

export default function SMTP2GOApi(apiKey: string) {
  return {
    service: function (endpoint: string) {
      return new SMTP2GOService(endpoint);
    },
    mail: function () {
      return new WebMailService();
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


