import MailAttachment from "./mailAttachment.web";
export default class InlineAttachment extends MailAttachment {
  constructor(cid: string, file: File) {
    super(file);
    this.filename = cid;
  }
}
