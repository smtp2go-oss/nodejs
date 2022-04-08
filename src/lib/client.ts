import BuildsRequest from "./buildsrequest";
import axios from "axios";
export default class SMTP2GOApiClient {
  apiKey: string;
  apiUrl: "https://api.smtp2go.com/v3/";

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.apiUrl = "https://api.smtp2go.com/v3/";
  }

  setApiKey(apiKey: string) {
    this.apiKey = apiKey;
  }

  async consume(service: BuildsRequest): Promise<any> {
    const body = service.buildRequestBody();
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
        // console.log(error.message);
      } else {
        // console.log(error.message);
      }
    }
  }
}
