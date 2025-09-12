import mailService from "./mailService";
import Attachment from "./types/attachment";
import { AttachmentCollection } from "./types/attachmentCollection";
export default class webMailService extends mailService {
    constructor();
    attach(attachment: Attachment | AttachmentCollection | File): this;
    inline(cid: string, file: File): this;
}
