import MailAttachment from "./mailAttachment.web";
import InlineAttachment from "./inlineAttachment.web";
import mailService from "./mailService";
import Attachment from "./types/attachment";
import {AttachmentCollection} from "./types/attachmentCollection";

export default class webMailService extends mailService {
  constructor() {
    super();
  }

  attach(attachment: Attachment | AttachmentCollection | File): this {
    if (Array.isArray(attachment)) {
      attachment.map((att) => this.attach(att));
    } else if ("filename" in attachment && "readFileBlob" in attachment) {
      this.attachments.push(attachment);
    } else {
      this.attachments.push(new MailAttachment(attachment));
    }
    return this;
  }
  inline(cid: string, file: File): this {
    const inlineAttachment = new InlineAttachment(cid, file);
    inlineAttachment.filename = cid;
    this.inlines.push(inlineAttachment);
    return this;
  }
}