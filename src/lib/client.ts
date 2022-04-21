import BuildsRequest from "./buildsrequest";
import axios from "axios";
export default class SMTP2GOApiClient {
  apiKey: string;
  apiUrl = "https://api.smtp2go.com/v3/";

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  setApiKey(apiKey: string) {
    this.apiKey = apiKey;
  }

  async consume(service: BuildsRequest): Promise<any> {
    const body = await service.buildRequestBody();
    body["api_key"] = this.apiKey;
    try {
      const { data } = await axios({
        method: service.getMethod(),
        url: this.apiUrl + service.getEndpoint(),
        headers: {
          "Content-Type": "application/json",
        },
        data: body,
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.message);
        return error.response;
      } else {
        console.error(error.message);
        return error.response;
      }
    }
  }
}
