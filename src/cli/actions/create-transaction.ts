import Transaction from "../../currency/transaction";

export default function createTransactionAction(
  privateKey: string,
  sender: string,
  receiver: string,
  value: number,
) {
  const transaction = new Transaction(sender, receiver, value);
  transaction.sign(privateKey);
  if (transaction.verify()) {
    console.log("Transaction created.");
    console.log(`Sender: ${transaction.getSender()}`);
    console.log(`Receiver: ${transaction.getReceiver()}`);
    console.log(`Value: ${transaction.getValue()}`);
  } else {
    console.log("Invalid transaction");
  }
}
