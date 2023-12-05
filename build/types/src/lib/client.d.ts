import BuildsRequest from "./buildsrequest";
export default class SMTP2GOApiClient {
    apiKey: string;
    apiUrl: string;
    headers: Record<string, string>;
    constructor(apiKey: string);
    setApiKey(apiKey: string): void;
    setHeaders(headers: any): void;
    getHeaders(): {
        "Content-Type": string;
        'X-Smtp2go-Api': string;
        'X-Smtp2go-Api-Version': string;
    };
    consume(service: BuildsRequest): Promise<any>;
}
