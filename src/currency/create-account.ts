import elliptic from "elliptic";
import Account from "./account";
const EC = elliptic.ec;

var ec = new EC("secp256k1");

export default function createAccount() {
  var key = ec.genKeyPair();
  return new Account(key.getPublic("hex"), key.getPrivate("hex"));
}
