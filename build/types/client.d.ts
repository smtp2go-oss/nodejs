import BuildsRequest from "./buildsrequest";
export default class SMTP2GOApiClient {
    apiKey: string;
    apiUrl: "https://api.smtp2go.com/v3/";
    constructor(apiKey: string);
    setApiKey(apiKey: string): void;
    consume(service: BuildsRequest): Promise<any>;
}
