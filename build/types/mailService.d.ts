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
    constructor();
    addAddress(address: Address, type?: AddressType): this;
    setBody(body: string): this;
    from(from: Address): this;
    to(toAddress: Address | AddressCollection): this;
    getFormattedAddresses(type: AddressType): Array<string>;
    formatAddress(address: Address): string;
    buildRequestBody(): Record<string, string | boolean>;
}
