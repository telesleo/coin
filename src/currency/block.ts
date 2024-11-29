import getTargetNumberFromDifficulty from "../tools/get-target-number-from-difficulty";
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

  public toHash() {
    const data = this.toJson();
    return hashString(data);
  }

  public setHash(hash: string) {
    this.hash = hash;
  }

  public process() {
    this.nonce = 0;
    const targetNumber = getTargetNumberFromDifficulty();
    while (true) {
      const hash = this.toHash();
      const number = BigInt(`0x${hash}`);
      if (number <= targetNumber) {
        return hash;
      }
      this.nonce++;
    }
  }

  public verify() {
    this.transactions.forEach((transaction) => {
      if (!transaction.verify()) {
        return false;
      }
    });
    return true;
  }
}
