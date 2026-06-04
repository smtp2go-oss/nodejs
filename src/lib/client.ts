import BuildsRequest from "./buildsrequest";
import axios, { isAxiosError } from "axios";
import packageInfo from '../../package.json';

export class SMTP2GOError extends Error {
  status?: number;
  response?: unknown;
  constructor(message: string, status?: number, response?: unknown) {
    super(message);
    this.name = 'SMTP2GOError';
    this.status = status;
    this.response = response;
  }
}

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
      'X-Smtp2go-Api-Version': packageInfo?.version || 'smtp2go-nodejs-development-version',
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
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        throw new SMTP2GOError(
          error.message,
          error.response?.status,
          error.response?.data,
        );
      }
      throw new SMTP2GOError(error instanceof Error ? error.message : 'An unknown error occurred');
    }
  }
}
