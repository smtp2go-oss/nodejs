import SMTP2GOService from './service';
import Address from './types/address';
import { AddressCollection } from './types/addressCollection';
import { AddressType } from './types/addressType';

export default class mailService extends SMTP2GOService {
    body: string;
    fromAddress: Address;
    toAddress: AddressCollection;
    ccAddress: AddressCollection;
    bccAddress: AddressCollection;

    constructor() {
        super('mail/send');
        this.toAddress = [];
        this.body = '';
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
    setBody(body: string) {
        this.body = body;
        return this;
    }
    from(from: Address) {
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
        return `${address.name} <${address.email}>`.trim();
    }
    buildRequestBody(): Record<string, string | boolean> {
        this.requestBody = new Map();
        this.requestBody.set('html_body', this.body);
        this.requestBody.set('to', this.getFormattedAddresses('to'));
        this.requestBody.set('sender', this.formatAddress(this.fromAddress));
        return super.buildRequestBody();
    }
}
