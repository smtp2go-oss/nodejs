import BuildsRequest from "./buildsrequest";
export default class SMTP2GOApiClient {
    apiKey: string;
    apiUrl: string;
    constructor(apiKey: string);
    setApiKey(apiKey: string): void;
    consume(service: BuildsRequest): Promise<any>;
}
