export class MessageId {
  constructor(ID?: string) {
    this._id = ID as string;
  }
  private _id;
  messageId: string = '';
  public setMessageId() {
    this.messageId = this._id;
  }
  public getMessageId() {
    return this.messageId;
  }
}
