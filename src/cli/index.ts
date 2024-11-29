import { program } from "commander";
import createAccountAction from "./actions/create-account";
import processBlockAction from "./actions/process-block";

program
  .command("create-account")
  .description("Create a new account and generate an address")
  .action(createAccountAction);

program
  .command("process-block")
  .argument("<selaer>", "Address that will seal the block")
  .description("Process a block")
  .action(processBlockAction);

program.parse();
