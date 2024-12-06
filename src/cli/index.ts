import { Command } from "commander";
import readline from "readline";
import shellQuote from "shell-quote";
import createAccountAction from "./actions/create-account";
import processBlockAction from "./actions/process-block";
import createTransactionAction from "./actions/create-transaction";
import clearAction from "./actions/clear";
import exitAction from "./actions/exit";
import connectToPeerAction from "./actions/connect-to-peer";
import greetAction from "./actions/greet";

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
  .description("Create a new transaction")
  .argument("<privateKey>", "Private Key for signing the transaction")
  .argument("<sender>", "Address sending the value")
  .argument("<receiver>", "Address receiving the value")
  .argument("<value>", "Value to be sent")
  .action(createTransactionAction);

program
  .command("process-block")
  .description("Process a block")
  .argument("<selaer>", "Address sealing the block")
  .action(processBlockAction);

program
  .command("connect-to-peer")
  .description("Connect to another peer")
  .argument("<host>, Host of the other peer")
  .argument("<port>, Port of the other peer")
  .action(connectToPeerAction);

program.command("greet").description("Greet peers").action(greetAction);

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
