import SMTP2GOService from './service';
import Address from './types/address';
import { AddressCollection } from './types/addressCollection';
export default class mailService extends SMTP2GOService {
    addresses: AddressCollection;
    body: string;
    from: Address;
    to: AddressCollection;
    constructor() {
        super('mail/send');
        this.addresses = [];
        this.to = [];
        this.body = '';
    }
    addAddress(address: Address) {
        this.addresses.push(address);
        return this;
    }
    setBody(body: string) {
        this.body = body;
        return this;
    }
    setFrom(from: Address) {
        this.from = from;
        return this;
    }
    getFormattedToAddresses(): Array<string> {
        return [];
    }
    formatAddress(address: Address): string {
        return `${address.name} <${address.email}>`.trim();
    }
    buildRequestBody(): Record<string, string | boolean> {
        this.requestBody = new Map();
        this.requestBody.set('html_body', this.body);
        this.requestBody.set('to', this.getFormattedToAddresses());
        this.requestBody.set('sender', this.formatAddress(this.from));        
        return super.buildRequestBody();

    }
}
