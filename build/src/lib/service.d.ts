import BuildsRequest from "./buildsrequest";
import { Method } from "axios";
import { RequestBody, RequestBodyMap } from "./types/requestBody";
declare class SMTP2GOService implements BuildsRequest {
    method: Method;
    endpoint: string;
    requestBody?: RequestBodyMap;
    constructor(endpoint: string, requestBody?: RequestBodyMap, method?: Method);
    getMethod(): Method;
    setMethod(method: Method): void;
    getEndpoint(): string;
    buildRequestBody(): Promise<RequestBody>;
}
export default SMTP2GOService;
