import Attachment from "./types/attachment";

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
    this.fileblob = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        // Remove the data URL prefix
        const result = (reader.result as string).split(",")[1];
        resolve(result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(this.file);
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