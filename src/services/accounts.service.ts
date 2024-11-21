import Account from '../currency/account';
import { loadData, saveData } from '../data/file';

const ACCOUNTS_FILE_PATH = './data/accounts.json';

function getAll() {
  return JSON.parse(loadData(ACCOUNTS_FILE_PATH) || '[]');
}

function create(accountName: string) {
  const account = new Account(accountName);
  const accounts = JSON.parse(loadData(ACCOUNTS_FILE_PATH) || '[]');
  accounts.push(account);
  saveData(JSON.stringify(accounts), ACCOUNTS_FILE_PATH);
}

export default {
  getAll,
  create,
};
