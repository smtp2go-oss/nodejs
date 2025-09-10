export default class mailAttachmentFactory {
    static async create(Attachment: string | File) {
        if (typeof Attachment === "string") {
            const { default: MailAttachmentNode } = await import("./mailAttachment.node");
            return new MailAttachmentNode(Attachment as string);
        } else if (typeof File !== "undefined" && Attachment instanceof File) {
            const { default: MailAttachmentWeb } = await import("./mailAttachment.web");
            return new MailAttachmentWeb(Attachment as File);
        }
        throw new Error("Unsupported attachment type");
    }
    static async createInline(cid: string, Attachment: string | File) {
        if (typeof Attachment === "string") {
            const { default: InlineAttachmentNode } = await import("./inlineAttachment.node");
            return new InlineAttachmentNode(cid, Attachment as string);
        } else if (typeof File !== "undefined" && Attachment instanceof File) {
            const { default: InlineAttachmentWeb } = await import("./inlineAttachment.web");
            return new InlineAttachmentWeb(cid, Attachment as File);
        }
    }
}