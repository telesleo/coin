import { program } from "commander";
import createAccount from "../currency/create-account";
import chalk from "chalk";
import processBlock from "../currency/process-block";

program
  .command("create-account")
  .description("Create a new account and generate an address")
  .action(() => {
    const account = createAccount();
    console.log(chalk.yellow("New Account:"));
    console.log(`${chalk.yellow("Address:")} ${account.getAdress()}`);
    console.log(`${chalk.yellow("Private Key:")} ${account.getPrivateKey()}`);
  });

program
  .command("process-block")
  .argument("<selaer>", "Address that will seal the block")
  .description("Process a block to get a no")
  .action((args) => {
    processBlock("", args.sealer);
  });

program.parse();
