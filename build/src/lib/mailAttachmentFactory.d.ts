export default class mailAttachmentFactory {
    static create(Attachment: string | File): Promise<import("./mailAttachment.node").default | import("./mailAttachment.web").default>;
    static createInline(cid: string, Attachment: string | File): Promise<import("./inlineAttachment.node").default | import("./inlineAttachment.web").default>;
}
