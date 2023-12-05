import MailAttachment from "./mailAttachment";
export default class InlineAttachment extends MailAttachment {
    constructor(cid: string, filepath: string);
}
