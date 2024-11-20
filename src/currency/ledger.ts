import Transaction from './transaction';

export default class Ledger {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public addTransaction(transaction: Transaction) {
    this.transactions.push(transaction);
  }

  public getTransactions() {
    return this.transactions;
  }
}
