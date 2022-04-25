import MailAttachment from "./mailAttachment";
export default class InlineAttachment extends MailAttachment {
  constructor(cid: string, filepath: string) {
    super(filepath);
    this.filename = cid;
  }
}
