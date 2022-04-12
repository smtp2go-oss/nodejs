import SMTP2GOService from './service';
import Address from './types/address';
import { AddressCollection } from './types/addressCollection';
import { AddressType } from './types/addressType';
import Header from './types/header';
import { HeaderCollection } from './types/headerCollection';

export default class mailService extends SMTP2GOService {
    htmlBody: string;
    textBody: string;
    fromAddress: Address;
    toAddress: AddressCollection;
    ccAddress: AddressCollection;
    bccAddress: AddressCollection;
    subjectLine: string;
    templateId: string;
    templateData: JSON;
    customHeaders: HeaderCollection;
    constructor() {
        super('email/send');
        ['toAddress', 'ccAddress', 'bccAddress', 'customHeaders'].forEach(item => this[item] = []);
    }
    addAddress(address: Address, type?: AddressType) {
        switch (type) {
            case 'cc':
                this.ccAddress.push(address);
                break;
            case 'bcc':
                this.bccAddress.push(address);
                break;
            case 'to':
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
            toAddress.map(address => this.addAddress(address, 'to'));
        } else {
            this.addAddress(toAddress, 'to');
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
        switch (type) {
            case 'cc':
                return this.ccAddress.map(this.formatAddress);
            case 'bcc':
                return this.bccAddress.map(this.formatAddress);
            case 'to':
            default:
                return this.toAddress.map(this.formatAddress);
        }
    }
    formatAddress(address: Address): string {
        return address.name ? `${address.name} <${address.email}>`.trim() : `<${address.email}>`.trim();
    }
    buildRequestBody(): Record<string, string | boolean> {
        this.requestBody = new Map();
        this.requestBody.set('html_body', this.htmlBody);
        this.requestBody.set('text_body', this.textBody);
        this.requestBody.set('to', this.getFormattedAddresses('to'));
        this.requestBody.set('sender', this.formatAddress(this.fromAddress));
        this.requestBody.set('subject', this.subjectLine);
        return super.buildRequestBody();
    }
}
