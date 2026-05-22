import BuildsRequest from "./buildsrequest";
export declare class SMTP2GOError extends Error {
    status?: number;
    response?: unknown;
    constructor(message: string, status?: number, response?: unknown);
}
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
