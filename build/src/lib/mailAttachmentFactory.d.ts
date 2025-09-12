export default class mailAttachmentFactory {
    static create(Attachment: string | File): Promise<import("./mailAttachment.web").default | import("./mailAttachment.node").default>;
    static createInline(cid: string, Attachment: string | File): Promise<import("./inlineAttachment.web").default | import("./inlineAttachment.node").default>;
}
