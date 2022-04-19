import SMTP2GOApiClient from "./client";
import SMTP2GOService from "./service";
import MailService from "./mailService";
import MailAttachment from "./mailAttachment";
export { SMTP2GOApiClient as ApiClient };
export { SMTP2GOService as Service };
export { MailService };
export { MailAttachment };

export default function SMTP2GOApi(apiKey: string) {
    return {
        service: function (endpoint: string) {
            return new SMTP2GOService(endpoint);
        },
        mail: function () {
            return new MailService();
        },
        client: function () {
            return new SMTP2GOApiClient(apiKey);
        }
    }
}



