export default class Transaction {
  private sender: string;
  private receiver: string;
  private value: number;

  constructor(sender: string, receiver: string, value: number) {
    this.sender = sender;
    this.receiver = receiver;
    this.value = value;
  }

  public getSender() {
    return this.sender;
  }

  public getEeceiver() {
    return this.receiver;
  }

  public getValue() {
    return this.value;
  }
}
