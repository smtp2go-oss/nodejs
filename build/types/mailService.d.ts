import SMTP2GOService from './service';
import Address from './types/address';
import { AddressCollection } from './types/addressCollection';
export default class mailService extends SMTP2GOService {
    addresses: AddressCollection;
    body: string;
    from: Address;
    to: AddressCollection;
    constructor();
    addAddress(address: Address): this;
    setBody(body: string): this;
    setFrom(from: Address): this;
    getFormattedToAddresses(): Array<string>;
    formatAddress(address: Address): string;
    buildRequestBody(): Record<string, string | boolean>;
}
