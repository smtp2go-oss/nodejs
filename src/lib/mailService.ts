import SMTP2GOService from "./service";
import { RequestBody, RequestBodyMap } from "./types/requestBody";
import {Address} from "./types/address";
import { AddressCollection } from "./types/addressCollection";
import { AddressType } from "./types/addressType";
import {Attachment} from "./types/attachment";
import { AttachmentCollection } from "./types/attachmentCollection";
import {Header} from "./types/header";
import { HeaderCollection } from "./types/headerCollection";

interface IAddressTypes {
  toAddress: AddressCollection;
  ccAddress: AddressCollection;
  bccAddress: AddressCollection;
}
interface ICollections {
  customHeaders: HeaderCollection | Array<Header>;
  attachments: AttachmentCollection | Array<Attachment>;
  inlines: AttachmentCollection | Array<Attachment>;
  toAddress: AddressCollection | Array<Address>;
  ccAddress: AddressCollection | Array<Address>;
  bccAddress: AddressCollection | Array<Address>;
}
interface IAttachmentTypes {
  attachments: AttachmentCollection;
  inlines: AttachmentCollection;
}
export default abstract class mailService extends SMTP2GOService {
  htmlBody?: string;
  textBody?: string;
  fromAddress?: Address;
  toAddress: AddressCollection;
  ccAddress: AddressCollection;
  bccAddress: AddressCollection;
  subjectLine?: string;
  templateId?: string;
  templateData?: Map<string, string>;
  customHeaders: HeaderCollection;
  attachments: AttachmentCollection;
  inlines: AttachmentCollection;
  constructor() {
    super("email/send");
    this.toAddress = [];
    this.ccAddress = [];
    this.bccAddress = [];
    this.customHeaders = [];
    this.attachments = [];
    this.inlines = [];
  }
  
  abstract attach(attachment: Attachment | AttachmentCollection | string | File): this;
  abstract inline(cid: string, filepath: string|File): this;

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
  template(templateId: string, templateData: Map<string, string>): this {
    this.templateId = templateId;
    this.templateData = templateData;
    return this;
  }
  to(toAddress: Address | AddressCollection): this {
    this._addAddressOfType(toAddress, "to");
    return this;
  }
  cc(toAddress: Address | AddressCollection): this {
    this._addAddressOfType(toAddress, "cc");
    return this;
  }
  bcc(toAddress: Address | AddressCollection): this {
    this._addAddressOfType(toAddress, "bcc");
    return this;
  }
  _addAddressOfType(emailAddress: Address | AddressCollection, t: AddressType) {
    if (Array.isArray(emailAddress)) {
      emailAddress.forEach((address) => this.addAddress(address, t));
    } else {
      this.addAddress(emailAddress, t);
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
  
  getFormattedAddresses(type: AddressType): Array<string> {
    return this[type + "Address" as keyof IAddressTypes].map(this.formatAddress);
  }
  formatAddress(address: Address): string {
    return address?.name
      ? `${address.name} <${address.email}>`.trim()
      : `<${address.email}>`.trim();
  }
  async buildRequestBody(): Promise<RequestBody> {
    const requestBody: RequestBodyMap = new Map();
    this.requestBody = requestBody;
    requestBody.set("html_body", this.htmlBody);
    if (this.textBody) {
      requestBody.set("text_body", this.textBody || "");
    }
    if (this.toAddress.length) {
      requestBody.set("to", this.getFormattedAddresses("to"));
    } else {
      throw Error('At least one "to" address is required.');
    }
    if (this.ccAddress.length) {
      requestBody.set("cc", this.getFormattedAddresses("cc"));
    }
    if (this.bccAddress.length) {
      requestBody.set("bcc", this.getFormattedAddresses("bcc"));
    }

    if (this.fromAddress?.email) {
      requestBody.set("sender", this.formatAddress(this.fromAddress));
    } else {
      throw Error("A from email address is required.");
    }

    requestBody.set("subject", this.subjectLine);

    if (this.customHeaders.length) {
      requestBody.set("custom_headers", this.customHeaders);
    }

    if (this.templateId) {
      requestBody.set("template_id", this.templateId);
    }
    if (this.templateData && this.templateData.size > 0) {
      requestBody.set("template_data", Object.fromEntries(this.templateData));
    }

    if (this.attachments.length || this.inlines.length) {
      const promises: any[] = [];
      ["attachments", "inlines"].forEach((attachmentType) => {
        this[attachmentType as keyof IAttachmentTypes].forEach((attachment: Attachment) => {
          promises.push(attachment.readFileBlob());
        });
      });
      await Promise.all(promises).then(() => {
        ["attachments", "inlines"].forEach((attachmentType) => {
          if (this[attachmentType as keyof ICollections].length) {
            requestBody.set(
              attachmentType,
              this[attachmentType as keyof IAttachmentTypes].map((attachment: Attachment) =>
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
