import Attachment from "./types/attachment";
import {readFile} from "fs/promises";
import {lookup} from "mime-types";
import {basename} from "path";
export default class MailAttachment implements Attachment {
  filepath: string;
  filename: string;
  fileblob: string;
  mimetype: string;
  constructor(filepath: string) {
    this.filepath = filepath;
    const mt = lookup(this.filepath);
    this.mimetype = typeof mt === "string" ? mt : "application/octet-stream";
    this.filename = basename(this.filepath);
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
    this.fileblob = await readFile(this.filepath, { encoding: "base64" })
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
