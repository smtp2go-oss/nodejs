import MailAttachment from "./mailAttachment";
import SMTP2GOService from "./service";
import Address from "./types/address";
import { AddressCollection } from "./types/addressCollection";
import { AddressType } from "./types/addressType";
import Attachment from "./types/attachment";
import { AttachmentCollection } from "./types/attachmentCollection";
import Header from "./types/header";
import { HeaderCollection } from "./types/headerCollection";

export default class mailService extends SMTP2GOService {
  htmlBody: string;
  textBody: string;
  fromAddress: Address;
  toAddress: AddressCollection;
  ccAddress: AddressCollection;
  bccAddress: AddressCollection;
  subjectLine: string;
  templateId: string;
  templateData: Map<string, string>;
  customHeaders: HeaderCollection;
  attachments: AttachmentCollection;
  inlines: AttachmentCollection;
  constructor() {
    super("email/send");
    [
      "toAddress",
      "ccAddress",
      "bccAddress",
      "customHeaders",
      "attachments",
      "inlines",
    ].forEach((item) => (this[item] = []));
  }
  addAddress(address: Address, type?: AddressType) {
    switch (type) {
      case "cc":
        this.ccAddress.push(address);
        break;
      case "bcc":
        this.bccAddress.push(address);
        break;
      case "to":
      default:
        this.toAddress.push(address);
        break;
    }
    return this;
  }
  html(content: string) {
    this.htmlBody = content;
    return this;
  }
  text(content: string): this {
    this.textBody = content;
    return this;
  }
  from(from: Address): this {
    this.fromAddress = from;
    return this;
  }
  to(toAddress: Address | AddressCollection): this {
    if (Array.isArray(toAddress)) {
      toAddress.map((address) => this.addAddress(address, "to"));
    } else {
      this.addAddress(toAddress, "to");
    }
    return this;
  }
  cc(toAddress: Address | AddressCollection): this {
    if (Array.isArray(toAddress)) {
      toAddress.map((address) => this.addAddress(address, "cc"));
    } else {
      this.addAddress(toAddress, "cc");
    }
    return this;
  }
  bcc(toAddress: Address | AddressCollection): this {
    if (Array.isArray(toAddress)) {
      toAddress.map((address) => this.addAddress(address, "bcc"));
    } else {
      this.addAddress(toAddress, "bcc");
    }
    return this;
  }
  headers(header: Header | HeaderCollection): this {
    if (Array.isArray(header)) {
      this.customHeaders.push(...header);
    } else {
      this.customHeaders.push(header);
    }
    return this;
  }
  subject(subject: string): this {
    this.subjectLine = subject;
    return this;
  }
  attach(attachment: Attachment | AttachmentCollection | string): this {
    if (typeof attachment === "string") {
      this.attachments.push(new MailAttachment(attachment));
    } else if (Array.isArray(attachment)) {
      this.attachments.push(...attachment);
    } else {
      this.attachments.push(attachment);
    }
    return this;
  }
  inline(cid: string, filepath: string): this {
    const inlineAttachment = new MailAttachment(filepath);
    inlineAttachment.filename = cid;
    this.inlines.push(inlineAttachment);
    return this;
  }
  getFormattedAddresses(type: AddressType): Array<string> {
    switch (type) {
      case "cc":
        return this.ccAddress.map(this.formatAddress);
      case "bcc":
        return this.bccAddress.map(this.formatAddress);
      case "to":
      default:
        return this.toAddress.map(this.formatAddress);
    }
  }
  formatAddress(address: Address): string {
    return address.name
      ? `${address.name} <${address.email}>`.trim()
      : `<${address.email}>`.trim();
  }
  async buildRequestBody(): Promise<Record<string, string | boolean>> {
    this.requestBody = new Map();
    this.requestBody.set("html_body", this.htmlBody);
    if (this.textBody) {
      this.requestBody.set("text_body", this.textBody || "");
    }
    if (this.toAddress.length) {
      this.requestBody.set("to", this.getFormattedAddresses("to"));
    }
    if (this.ccAddress.length) {
      this.requestBody.set("cc", this.getFormattedAddresses("cc"));
    }
    if (this.bccAddress.length) {
      this.requestBody.set("bcc", this.getFormattedAddresses("bcc"));
    }

    this.requestBody.set("sender", this.formatAddress(this.fromAddress));

    this.requestBody.set("subject", this.subjectLine);

    if (this.templateId) {
      this.requestBody.set("template_id", this.templateId);
    }
    if (this.templateData?.size > 0) {
      this.requestBody.set("template_data", this.templateData);
    }

    if (this.attachments.length || this.inlines.length) {
      const promises: any[] = [];
      ["attachments", "inlines"].forEach((attachmentType) => {
        this[attachmentType].forEach((attachment: MailAttachment) => {
          promises.push(attachment.readFileBlob());
        });
      });
      await Promise.all(promises).then(() => {
        ["attachments", "inlines"].forEach((attachmentType) => {
          if (this[attachmentType].length) {
            this.requestBody.set(
              attachmentType,
              this[attachmentType].map((attachment: MailAttachment) =>
                attachment.forSend()
              )
            );
          }
        });
      });
    }
    return await super.buildRequestBody();
  }
}
