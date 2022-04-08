import BuildsRequest from "./buildsrequest";
import { Method } from "axios";
declare class SMTP2GOService implements BuildsRequest {
    method: Method;
    endpoint: string;
    requestBody?: Map<string, any>;
    constructor(endpoint: string, requestBody?: Map<string, string | boolean>, method?: Method);
    getMethod(): Method;
    getEndpoint(): string;
    buildRequestBody(): Record<string, string | boolean>;
}
export default SMTP2GOService;
