import chalk from "chalk";
import hashString from "../../tools/hash-string";
import hashToNumber from "../../tools/hash-to-number";
import randomNumber from "../../tools/random-number";
import Transaction from "./transaction";

export default class Block {
  private previousBlock: string;
  private sealer: string;
  private nonce: bigint;
  private hash: string;
  private transactions: Transaction[];

  constructor(
    previousBlock: string,
    sealer: string,
    nonce: bigint = BigInt(0),
  ) {
    this.previousBlock = previousBlock;
    this.sealer = sealer;
    this.nonce = nonce;
    this.hash = "";
    this.transactions = [];
  }

  public addTransaction(transaction: Transaction) {
    this.transactions.push(transaction);
  }

  public getNonce() {
    return this.nonce;
  }

  public setNonce(nonce: bigint) {
    this.nonce = nonce;
  }

  public toJson() {
    return JSON.stringify(
      {
        previousBlock: this.previousBlock,
        sealer: this.sealer,
        nonce: this.nonce,
        transactions: this.transactions,
      },
      (_, value) => (typeof value === "bigint" ? value.toString() : value),
    );
  }

  public hashFromBlock() {
    const blockData = this.toJson();
    const hash = hashString(blockData);
    return hash;
  }

  public setHash(hash: string) {
    this.hash = hash;
  }

  public process(targetHash: string) {
    const initialNonce = randomNumber();
    this.nonce = initialNonce;

    const targetHashNumber = hashToNumber(targetHash);

    while (true) {
      const hash = this.hashFromBlock();
      const hashNumber = hashToNumber(hash);
      if (hashNumber <= targetHashNumber) {
        return hash;
      }
      this.nonce++;
    }
  }
}
