import { it, expect } from '@jest/globals';
import { File } from 'buffer';
import MailAttachmentWeb from '../mailAttachment.web';

it('Should get the name and mimetype, and base64 encode a given File', async () => {
  const filePath = require('path').resolve(__dirname, './files/cat.jpg');
  const buffer = require('fs').readFileSync(filePath);
  const file = new File([buffer], 'cat.jpg', { type: 'image/jpeg' });

  const m = new MailAttachmentWeb(file as globalThis.File);
  expect(m.mimetype).toBe('image/jpeg');
  expect(m.filename).toBe('cat.jpg');
  await m.readFileBlob();
  expect(m.fileblob).not.toEqual('');
});

it('Should base64 encode file contents correctly', async () => {
  const file = new File([Buffer.from('Hello World!')], 'hello.txt', { type: 'text/plain' });
  const m = new MailAttachmentWeb(file as globalThis.File);
  expect(m.mimetype).toBe('text/plain');
  expect(m.filename).toBe('hello.txt');
  await m.readFileBlob();
  expect(m.fileblob).toBe(btoa('Hello World!'));
});

it('Should not re-read the file if fileblob is already set', async () => {
  const file = new File([Buffer.from('Hello!')], 'hello.txt', { type: 'text/plain' });
  const m = new MailAttachmentWeb(file as globalThis.File);
  m.setFileBlob('already-set');
  await m.readFileBlob();
  expect(m.fileblob).toBe('already-set');
});
