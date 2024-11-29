import crypto from "crypto";

export default function randomNumber() {
  const randomArray = new Uint32Array(1);
  crypto.getRandomValues(randomArray);
  return BigInt(randomArray[0]);
}
