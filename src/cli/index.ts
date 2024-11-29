import { program } from "commander";
import createAccountAction from "./actions/create-account";
import createTransactionAction from "./actions/create-transaction";
import processBlockAction from "./actions/process-block";

program
  .command("create-account")
  .description("Create a new account generating a private key and an address")
  .action(createAccountAction);

program
  .command("transaction")
  .argument("<privateKey>", "Private Key for signing the transaction")
  .argument("<sender>", "Address sending the value")
  .argument("<receiver>", "Address receiving the value")
  .argument("<value>", "Value to be sent")
  .description("Create a new transaction")
  .action(createTransactionAction);

program
  .command("process-block")
  .argument("<selaer>", "Address sealing the block")
  .description("Process a block")
  .action(processBlockAction);

program.parse();
