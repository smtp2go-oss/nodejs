
export  interface Attachment {
    filename: string
    fileblob: string
    mimetype: string
    readFileBlob(): Promise<this>;
    forSend(): { filename: string; fileblob: string; mimetype: string };

}