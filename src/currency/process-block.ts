import Block from "./block";
import randomNumber from "../tools/randomNumber";

const HASH_LENGTH = 64;
const DIFFICULTY = 6;
const difficultyClamped = Math.min(DIFFICULTY, HASH_LENGTH);
const targetHash = [
  ...new Array(difficultyClamped).fill("0"),
  ...new Array(HASH_LENGTH - difficultyClamped).fill("f"),
].join("");
const targetHashNumber = BigInt(`0x${targetHash}`);

export default function processBlock(previousBlock: string, sealer: string) {
  const block = new Block(previousBlock, sealer);
  console.log("Processing block...");
  while (true) {
    block.setNonce(randomNumber());
    const hash = block.toHash();
    const hashNumber = BigInt(`0x${hash}`);
    if (hashNumber < targetHashNumber) {
      console.log(hash);
      return;
    }
  }
}
