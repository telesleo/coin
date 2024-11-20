import chalk from 'chalk';
import Account from '../currency/account';
import { loadData, saveData } from '../data/file';
import inputConsole from './console';

export default class Home {
  private readonly ACCOUNTS_FILE_PATH = './data/accounts.json';
  private accounts: Account[] = [];

  constructor() {
    this.start();
    this.loadAccounts();
    this.welcome();
    this.displayAccounts();
    this.signInOrCreateAccount();
  }

  private start() {
    console.clear();
  }

  private loadAccounts() {
    const accountJsonString = loadData(this.ACCOUNTS_FILE_PATH) || '[]';
    if (accountJsonString) {
      this.accounts = JSON.parse(accountJsonString).map(
        (accountData: { name: string }) => {
          const account = new Account(accountData.name);
          return Object.assign(account, accountData);
        },
      );
    }
  }

  private welcome() {
    console.log(chalk.yellow('Welcome to CoinCurrency!'));
    console.log('');
  }

  private displayAccounts() {
    console.log('Accounts:');
    this.accounts.forEach((account: Account) => {
      console.log(chalk.yellow(account.getName()));
    });
    console.log('');
  }

  private async signInOrCreateAccount() {
    console.log('1 - Sign in to an account');
    console.log('2 - Create a new account');
    console.log('');

    const option = await inputConsole.input('Choose an option: ');

    switch (option) {
      case '1':
        this.signIn();
        break;
      case '2':
        this.createAccount();
        break;
      default:
        this.invalidOption();
        this.signInOrCreateAccount();
    }
  }

  private async signIn() {
    const accountName = await inputConsole.input('Enter the account name: ');
    const account = this.accounts.find(
      (account: Account) => account.getName() === accountName,
    );
    if (!account) {
      this.accountDoesNotExist(accountName);
      this.signInOrCreateAccount();
    }
  }

  private async createAccount() {
    const accountName = await inputConsole.input('Enter the account name: ');
    const account = this.accounts.find(
      (account: Account) => account.getName() === accountName,
    );
    if (account) {
      this.accountAlreadyExists(accountName);
      this.signInOrCreateAccount();
      return;
    }
    const newAccount = new Account(accountName);
    this.accounts.push(newAccount);
    saveData(JSON.stringify(this.accounts), this.ACCOUNTS_FILE_PATH);
  }

  private invalidOption() {
    console.log(chalk.red('Invalid option'));
    console.log('');
  }

  private accountDoesNotExist(accountName: string) {
    console.log(chalk.red(`Account '${accountName}' does not exist`));
    console.log('');
  }

  private accountAlreadyExists(accountName: string) {
    console.log(chalk.red(`Account '${accountName}' already exists`));
    console.log('');
  }
}
