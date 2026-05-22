import BuildsRequest from "./buildsrequest";
import { Method } from "axios";
import { RequestBody, RequestBodyMap } from "./types/requestBody";
class SMTP2GOService implements BuildsRequest {
  method: Method;
  endpoint: string;
  requestBody?: RequestBodyMap;

  constructor(
    endpoint: string,
    requestBody?: RequestBodyMap,
    method?: Method
  ) {
    this.endpoint = endpoint;
    this.requestBody = requestBody || new Map();
    this.method = method || "POST";
  }

  getMethod(): Method {
    return this.method;
  }

  setMethod(method: Method) {
    this.method = method;
  }

  getEndpoint(): string {
    return this.endpoint;
  }

  async buildRequestBody(): Promise<RequestBody> {
    return await Promise.resolve(Object.fromEntries(this.requestBody ?? new Map<string, any>()));
  }
}
export default SMTP2GOService;
