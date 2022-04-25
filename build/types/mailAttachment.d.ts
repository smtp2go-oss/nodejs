import Attachment from "./types/attachment";
export default class MailAttachment implements Attachment {
    filepath: string;
    filename: string;
    fileblob: string;
    mimetype: string;
    constructor(filepath: string);
    setFileBlob(blob: string): this;
    /**
     * Get the base64 encoded file content
     * @returns Promise<string>
     */
    readFileBlob(): Promise<this>;
    forSend(): {
        filename: string;
        fileblob: string;
        mimetype: string;
    };
}
