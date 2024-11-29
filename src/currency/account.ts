export default class Account {
  private address;
  private privateKey;

  constructor(address: string, privateKey: string) {
    this.address = address;
    this.privateKey = privateKey;
  }

  public getAdress() {
    return this.address;
  }

  public getPrivateKey() {
    return this.privateKey;
  }
}
