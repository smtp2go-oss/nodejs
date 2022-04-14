import MailAttachment from '../mailAttachment';

it('Should get the name and mimetype, and base64 encode a given filepath', async () => {
    
    const m = new MailAttachment(require('path').resolve(__dirname, './files/cat.jpg'));
    expect(m.mimetype).toBe('image/jpeg');
    expect(m.filename).toBe('cat.jpg');
    await m.getFileBlob();
    expect(m.fileblob).not.toEqual(undefined);
});