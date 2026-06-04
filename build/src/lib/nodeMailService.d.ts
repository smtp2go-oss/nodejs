import mailService from "./mailService";
import { Attachment } from "./types/attachment";
import { AttachmentCollection } from "./types/attachmentCollection";
export default class nodeMailService extends mailService {
    constructor();
    attach(attachment: Attachment | AttachmentCollection | File | string): this;
    inline(cid: string, filepath: string): this;
}
