import Attachment from "./types/attachment";
const fs = require("fs").promises;
const mime = require("mime-types");
const path = require("path");
export default class MailAttachment implements Attachment {
  filepath: string;
  filename: string;
  fileblob: string;
  mimetype: string;
  constructor(filepath: string) {
    this.filepath = filepath;
    this.mimetype = mime.lookup(this.filepath);
    this.filename = path.basename(this.filepath);
    this.fileblob = "";
  }
  setFileBlob(blob: string): this {
    this.fileblob = blob;
    return this;
  }
  /**
   * Get the base64 encoded file content
   * @returns Promise<string>
   */
  async readFileBlob(): Promise<this> {
    if (this.fileblob != "") {
      return this;
    }
    this.fileblob = await fs
      .readFile(this.filepath, { encoding: "base64" })
      .catch((err: any) => {
        throw err;
      });
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
