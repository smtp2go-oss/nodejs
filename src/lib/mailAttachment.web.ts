import { Attachment } from "./types/attachment";

export default class MailAttachment implements Attachment {
  file: File;
  filename: string;
  fileblob: string;
  mimetype: string;

  constructor(file: File) {
    this.file = file;
    this.filename = file.name;
    this.mimetype = file.type || "application/octet-stream";
    this.fileblob = "";
  }

  setFileBlob(blob: string): this {
    this.fileblob = blob;
    return this;
  }

  /**
   * Get the base64 encoded file content
   * @returns Promise<this>
   */
  async readFileBlob(): Promise<this> {
    if (this.fileblob !== "") {
      return this;
    }
    if (this.file) {
      const bytes = new Uint8Array(await this.file.arrayBuffer());
      let binary = '';
      for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      this.fileblob = btoa(binary);
    }

    return this;
  }

  forSend() {
    return {
      filename: this.filename,
      fileblob: this.fileblob,
      mimetype: this.mimetype,
    };
  }
}