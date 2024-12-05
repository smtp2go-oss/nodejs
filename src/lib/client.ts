import BuildsRequest from "./buildsrequest";
import axios from "axios";
import packageInfo from '../../package.json';
export default class SMTP2GOApiClient {
  apiKey: string;
  apiUrl = "https://api.smtp2go.com/v3/";
  headers: Record<string, string> = {};

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  setApiKey(apiKey: string) {
    this.apiKey = apiKey;
  }
  setHeaders(headers: any) {
    this.headers = headers;
  }
  getHeaders() {
    const presetHeaders = {
      "Content-Type": "application/json",
      'X-Smtp2go-Api': 'smtp2go-nodejs',
      'X-Smtp2go-Api-Version': packageInfo.version,
    };
    //combine preset headers with custom headers but don't allow custom headers to overwrite preset headers
    return { ...this.headers, ...presetHeaders };
  }

  async consume(service: BuildsRequest): Promise<any> {
    const body = await service.buildRequestBody();
    body["api_key"] = this.apiKey;
    try {
      const { data } = await axios({
        method: service.getMethod(),
        url: this.apiUrl + service.getEndpoint(),
        headers: this.getHeaders(),
        data: body,
      });
      return data;
    } catch (error) {
      return error.response;
    }
  }
}
