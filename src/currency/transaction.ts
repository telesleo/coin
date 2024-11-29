import elliptic from "elliptic";
import hashString from "../tools/hashString";
const ec = new elliptic.ec("secp256k1");

export default class Transaction {
  private sender: string;
  private receiver: string;
  private value: number;
  private signature: string;

  constructor(sender: string, receiver: string, value: number) {
    this.sender = sender;
    this.receiver = receiver;
    this.value = value;
    this.signature = "";
  }

  public getSender() {
    return this.sender;
  }

  public getReceiver() {
    return this.receiver;
  }

  public getValue() {
    return this.value;
  }

  public toJson() {
    return JSON.stringify({
      sender: this.sender,
      receiver: this.receiver,
      value: this.value,
    });
  }

  public toHash() {
    const data = this.toJson();
    return hashString(data);
  }

  public sign(privateKey: string) {
    const hash = this.toHash();
    const key = ec.keyFromPrivate(privateKey, "hex");
    this.signature = key.sign(hash).toDER("hex");
  }

  public verify() {
    try {
      const hash = this.toHash();
      const key = ec.keyFromPublic(this.sender, "hex");
      return key.verify(hash, this.signature);
    } catch (error) {
      return false;
    }
  }
}
