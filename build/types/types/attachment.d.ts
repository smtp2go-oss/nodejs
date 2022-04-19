export default interface Attachment {
    filename: string;
    fileblob: string;
    mimetype: string;
    getFileBlob(): Promise<string>;
}
