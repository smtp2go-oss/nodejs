import MailAttachment from "./mailAttachment.node";
export default class InlineAttachment extends MailAttachment {
  constructor(cid: string, filepath: string) {
    super(filepath);
    this.filename = cid;
  }
}
