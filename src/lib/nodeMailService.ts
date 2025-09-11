import MailAttachment from "./mailAttachment.node";
import InlineAttachment from "./inlineAttachment.node";
import mailService from "./mailService";
import Attachment from "./types/attachment";
import { AttachmentCollection } from "./types/attachmentCollection";

export default class webMailService extends mailService {
    constructor() {
        super();
    }

    attach(attachment: Attachment | AttachmentCollection | File | string): this {
        if (typeof attachment === "string") {
            this.attachments.push(new MailAttachment(attachment));
        } else if (Array.isArray(attachment)) {
            attachment.map((att) => this.attach(att));
        } else if ("filename" in attachment && "readFileBlob" in attachment) {
            this.attachments.push(attachment);
        }
        return this;
    }
    inline(cid: string, filepath: string): this {
        const inlineAttachment = new InlineAttachment(cid, filepath);
        inlineAttachment.filename = cid;
        this.inlines.push(inlineAttachment);
        return this;
    }
}