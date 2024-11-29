import Transaction from "../../currency/elements/transaction";

export default function transactionAction(args: {
  sender: string;
  receiver: string;
  value: number;
}) {
  const transaction = new Transaction(args.sender, args.receiver, args.value);
}
