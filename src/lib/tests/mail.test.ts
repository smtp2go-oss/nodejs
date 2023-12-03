import { MailService } from '../index';
import SMTP2GOApi from '../index';

it('Adds an address', () => {
    const mailService = new MailService();
    mailService.addAddress({ email: 'test@email.local' });
    expect(mailService.toAddress.length).toBe(1);
});

it('Formats an address', () => {
    const mailService = new MailService();
    expect(mailService.formatAddress({ email: 'test@email.local', name: 'steve' })).toBe('steve <test@email.local>');

});

it('Accepts a collection of "to" addresses', () => {
    const mailService = new MailService();
    expect(mailService.to([{ email: 'address1@test.local' }, { email: 'address2@test.local', name: 'Steve' }])).toBe(mailService);
    expect(mailService.toAddress.length).toBe(2);

});

it('Formats a type of address', () => {
    const mailService = new MailService();
    mailService.addAddress({ email: 'test@test.local', name: 'Mary' }, 'to');
    expect(mailService.getFormattedAddresses('to')[0]).toBe('Mary <test@test.local>');

    mailService.addAddress({ email: 'test@test.local', name: 'Mary' }, 'cc');
    expect(mailService.getFormattedAddresses('cc')[0]).toBe('Mary <test@test.local>');

    mailService.addAddress({ email: 'test@test.local', name: 'Mary' }, 'bcc');
    expect(mailService.getFormattedAddresses('bcc')[0]).toBe('Mary <test@test.local>');

})

it('Accepts a collection of "cc" addresses', () => {
    const mailService = new MailService();
    expect(mailService.cc([{ email: 'address1@test.local' }, { email: 'address2@test.local', name: 'Steve' }])).toBe(mailService);
    expect(mailService.ccAddress.length).toBe(2);
});

it('Accepts a collection of "bcc" addresses', () => {
    const mailService = new MailService();
    expect(mailService.bcc([{ email: 'address1@test.local' }, { email: 'address2@test.local', name: 'Steve' }])).toBe(mailService);
    expect(mailService.bccAddress.length).toBe(2);
});


it('Accepts a collection of custom headers', () => {
    const mailService = new MailService();
    mailService.headers({ name: 'X-SENT-BY', value: 'SMPT2GONODE' });
    expect(mailService.customHeaders.length).toBe(1);
    mailService.headers({ name: 'X-ANOTHER-HEADER', value: '!!' });
    expect(mailService.customHeaders.length).toBe(2);
});

it('Builds an email request', async () => {
    const api = SMTP2GOApi("API-KEY");
    expect(api.client().apiKey).toBe("API-KEY");
    const mail = api.mail()
        .to({ email: 'kris@2050.nz' })
        .cc({ email: 'kris.r.johansen@icloud.com' })
        .from({ email: 'sender@2050.nz' })
        .subject('Testing')
        .html('<h1>Hello World</h1><img src="cid:a-cat"/><p>This is a test html email!</p>')
        .attach(require('path').resolve(__dirname, './files/test.txt'))
        .inline('a-cat', require('path').resolve(__dirname, './files/cat.jpg'))

    const requestBody = await mail.buildRequestBody();
    expect(requestBody).toHaveProperty('html_body');

    expect(requestBody).not.toHaveProperty('text_body');
    expect(requestBody).toHaveProperty('attachments');
    expect(requestBody).toHaveProperty('inlines');

    // const res = await api.client().consume(mail);
    // expect(res).toHaveProperty('request_id');
})