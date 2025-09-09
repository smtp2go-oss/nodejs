global.File = class MockFile {
  name: string;
  type: string;
  _buffer: Buffer;
  constructor(parts: any[], filename: string, options: any = {}) {
    this.name = filename;
    this.type = options.type || '';
    this._buffer = Buffer.concat(parts.map((part: any) =>
      typeof part === 'string' ? Buffer.from(part) : Buffer.from(part)
    ));
  }
} as any;

global.FileReader = class MockFileReader {
  result: string | ArrayBuffer | null = null;
  onload: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null = null;
  onerror: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null = null;
  readAsDataURL(file: any) {
    // Simulate base64 encoding
    const base64 = file._buffer.toString('base64');
    this.result = `data:${file.type || 'application/octet-stream'};base64,${base64}`;
    if (this.onload) this.onload.call(this, {} as any);
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