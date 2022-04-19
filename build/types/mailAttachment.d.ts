import Attachment from "./types/attachment";
export default class MailAttachment implements Attachment {
    filepath: string;
    filename: string;
    fileblob: string;
    mimetype: string;
    constructor(filepath: string);
    /**
     * Get the base64 encoded file content
     * @returns Promise<string>
     */
    getFileBlob(): Promise<string>;
    forSend(): {
        filename: string;
        fileblob: string;
        mimetype: string;
    };
}
