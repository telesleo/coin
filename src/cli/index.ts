import { Command } from "commander";
import readline from "readline";
import shellQuote from "shell-quote";
import createAccountAction from "./actions/create-account";
import processBlockAction from "./actions/process-block";
import createTransactionAction from "./actions/create-transaction";
import clearAction from "./actions/clear";
import exitAction from "./actions/exit";

const program = new Command();

program.exitOverride();

program.configureOutput({
  outputError: () => {},
});

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

program.command("clear").description("Clear the console").action(clearAction);

program.command("exit").description("Exit the program").action(exitAction);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("close", process.exit);

function runCommand(command: string) {
  try {
    program.parse([
      process.argv[0],
      process.argv[1],
      ...(shellQuote.parse(command) as string[]),
    ]);
  } catch (error) {
    console.log((error as Error).message);
  }
}

function promptOutput(input: string) {
  runCommand(input);
  prompt();
}

function prompt() {
  rl.question("> ", promptOutput);
}

console.log("Welcome to Coin!");

prompt();
