
import  SMTP2GOApi from 'smtp2go-nodejs';

// Replace these with your actual values or use process.argv/env
const APIkey = process.env.SMTP2GO_API_KEY;
const to = "recipient@youremail.com";
const from = "sender@youremail.com";
const subject = "Test Subject";
const message = "Test message";

// Initialize API
const api = SMTP2GOApi(APIkey);

const mailService = api.mail()
    .to({ email: to })
    .from({ email: from })
    .subject(subject)
    .text(message);

// If you want to attach a file, read it and convert to base64
// import fs from 'fs';
// const fileBuffer = fs.readFileSync('path/to/file');
// const base64 = fileBuffer.toString('base64');
// mailService.attach({
//     filename: 'file.txt',
//     content: base64,
//     contentType: 'text/plain',
//     disposition: 'attachment'
// });

api.client().consume(mailService).then(response => {
    if (!response.data.succeeded) {
        console.error("Failed to send email", response.data);
    } else {
        console.log("Email sent!", response.data);
    }
});