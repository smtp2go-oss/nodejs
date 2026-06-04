import { Attachment } from "./types/attachment";
export default class MailAttachment implements Attachment {
    file: File;
    filename: string;
    fileblob: string;
    mimetype: string;
    constructor(file: File);
    setFileBlob(blob: string): this;
    /**
     * Get the base64 encoded file content
     * @returns Promise<this>
     */
    readFileBlob(): Promise<this>;
    forSend(): {
        filename: string;
        fileblob: string;
        mimetype: string;
    };
}
