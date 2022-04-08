import {Method} from 'axios';
interface BuildsRequest {
    /**
     * Returns the HTTP Request Method Used for the endpoint GET|POST|PUT etc
     *
     * @return Method
     */
    getMethod(): Method;

    /**
     * Returns the endpoint to the service
     *
     * @return string
     */
    getEndpoint(): string;

    /**
     * Builds the request body to send
     *
     * @return object
     */
     buildRequestBody(): Record<string, unknown>;

}
export default BuildsRequest;