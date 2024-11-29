import chalk from "chalk";
import createAccount from "../../currency/create-account";

export default function createAccountAction() {
    const account = createAccount();
    console.log(chalk.yellow("New Account:"));
    console.log(`${chalk.yellow("Address:")} ${account.getAdress()}`);
    console.log(`${chalk.yellow("Private Key:")} ${account.getPrivateKey()}`);
}
