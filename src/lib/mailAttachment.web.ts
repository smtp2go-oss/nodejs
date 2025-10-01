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
      const buffer = await this.file.arrayBuffer();
      // Convert to base64
      this.fileblob = btoa(String.fromCharCode(...new Uint8Array(buffer)));
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