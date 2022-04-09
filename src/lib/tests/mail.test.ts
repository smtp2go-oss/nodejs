import { MailService } from '../index';
it('Adds an address', () => {
    const mailService = new MailService();
    mailService.addAddress({ email: 'test@email.local' });
    expect(mailService.toAddress.length).toBe(1);
});

it('Formats an address', () => {
    const mailService = new MailService();
    mailService.addAddress({ email: 'test@email.local' });
    expect(mailService.formatAddress({ email: 'test@email.local', name: 'steve' })).toBe('steve <test@email.local>');
});

it('Accepts a collection of "to" addresses', () => {
    const mailService = new MailService();
    expect(mailService.to([{email:'address1@test.local'},{email:'address2@test.local',name:'Steve'}])).toBe(mailService);
    expect(mailService.toAddress.length).toBe(2);
        
});