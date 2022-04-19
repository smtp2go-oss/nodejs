import BuildsRequest from "./buildsrequest";
import { Method } from "axios";
class SMTP2GOService implements BuildsRequest {
  method: Method;
  endpoint: string;
  requestBody?: Map<string, any>;

  constructor(
    endpoint: string,
    requestBody?: Map<string, string | boolean>,
    method?: Method
  ) {
    this.endpoint = endpoint;
    this.requestBody = requestBody || new Map();
    this.method = method || "POST";
  }

  getMethod(): Method {
    return this.method;
  }

  getEndpoint(): string {
    return this.endpoint;
  }

  async buildRequestBody(): Promise<Record<string, string | boolean>> {
    return await Promise.resolve(Object.fromEntries(this.requestBody));
  }
}
export default SMTP2GOService;
