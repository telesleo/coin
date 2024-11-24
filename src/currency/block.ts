import hashString from "../tools/hashString";
import Transaction from "./transaction";

export default class Block {
  private previousBlock: string;
  private sealer: string;
  private nonce: number;
  private hash: string;
  private transactions: Transaction[];

  constructor(previousBlock: string, sealer: string, nonce: number = 0) {
    this.previousBlock = previousBlock;
    this.sealer = sealer;
    this.nonce = nonce;
    this.hash = "";
    this.transactions = [];
  }

  public addTransaction(transaction: Transaction) {
    this.transactions.push(transaction);
  }

  public setNonce(nonce: number) {
    this.nonce = nonce;
  }

  public toJson() {
    return JSON.stringify({
      previousBlock: this.previousBlock,
      sealer: this.sealer,
      nonce: this.nonce,
      transactions: this.transactions,
    });
  }

  public hashFromBlock() {
    const blockData = this.toJson();
    const hash = hashString(blockData);
    return hash;
  }

  public setHash(hash: string) {
    this.hash = hash;
  }
}
