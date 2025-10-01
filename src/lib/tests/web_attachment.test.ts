global.File = class MockFile {
  name: string;
  type: string;
  _buffer: Buffer;
  constructor(parts: any[], filename: string, options: any = {}) {
    this.name = filename;
    this.type = options.type || '';
    this._buffer = Buffer.concat(parts.map((part: any) =>
      Buffer.from(part)
    ));
  }
  arrayBuffer() {
    // Return a Promise that resolves to an ArrayBuffer
    return Promise.resolve(this._buffer.buffer.slice(
      this._buffer.byteOffset,
      this._buffer.byteOffset + this._buffer.byteLength
    ));
  }
} as any;

import MailAttachmentWeb from '../mailAttachment.web';

it('Should get the name and mimetype, and base64 encode a given File', async () => {
  const filePath = require('path').resolve(__dirname, './files/cat.jpg');
  const buffer = require('fs').readFileSync(filePath);
  const file = new File([buffer], 'cat.jpg', { type: 'image/jpeg' });

  const m = new MailAttachmentWeb(file);
  expect(m.mimetype).toBe('image/jpeg');
  expect(m.filename).toBe('cat.jpg');
  await m.readFileBlob();
  expect(m.fileblob).not.toEqual(undefined);
});

it('Should get the name and mimetype, and base64 encode a given File', async () => {
  const file = new File([Buffer.from('Hello World!')], 'hello.txt', { type: 'text/plain' });
  const m = new MailAttachmentWeb(file);
  expect(m.mimetype).toBe('text/plain');
  expect(m.filename).toBe('hello.txt');
  await m.readFileBlob();
  expect(m.fileblob).toBe(btoa('Hello World!'));
});
