
import SMTP2GOApi from '../index';
import mailService from '../mailService';
require('dotenv').config();

it('Builds an email request', async () => {
    const api = SMTP2GOApi(process.env.APIKEY);

    const mail = api.mail()
        .to({ email: 'kris@2050.nz' })  
        .cc({email:'kris.r.johansen@icloud.com'})      
        .from({ email: 'sender@2050.nz' })
        .subject('Testing')
        .html('<h1>Hello World</h1><img src="cid:a-cat"/><p>This is a test html email!</p>')
        .attach(require('path').resolve(__dirname, './files/test.txt'))
        .inline('a-cat',require('path').resolve(__dirname, './files/cat.jpg'))
        
    const requestBody = await mail.buildRequestBody();
    expect(requestBody).toHaveProperty('html_body');
    expect(requestBody).not.toHaveProperty('text_body');
    expect(requestBody).toHaveProperty('attachments');
    expect(requestBody).toHaveProperty('inlines');
    
    // api.client().consume(mail);
})