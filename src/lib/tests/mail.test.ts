import {MailService} from '../index';
it('Adds an address', () => {
    const mailService = new MailService();
    mailService.addAddress({email:'test@email.local'});
    expect(mailService.addresses.length).toBe(1);
});
