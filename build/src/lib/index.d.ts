import SMTP2GOApiClient from "./client";
import SMTP2GOService from "./service";
import NodeMailService from "./nodeMailService";
export { SMTP2GOApiClient as ApiClient };
export { SMTP2GOService as Service };
export { NodeMailService };
export default function SMTP2GOApi(apiKey: string): {
    service: (endpoint: string) => SMTP2GOService;
    mail: () => NodeMailService;
    client: () => SMTP2GOApiClient;
};
export * from './types/address';
export * from './types/addressCollection';
export * from './types/addressType';
export * from './types/attachment';
export * from './types/attachmentCollection';
export * from './types/header';
export * from './types/headerCollection';
