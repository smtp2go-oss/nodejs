
export default interface Attachment {
    filename: string
    fileblob: string
    mimetype: string
    readFileBlob(): Promise<this>;

}