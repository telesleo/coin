import Block from "./elements/block";
import getTargetHash from "../tools/get-target-hash";
import "dotenv/config";
import { DIFFICULTY } from "../currency/constants";

export default function processBlock(previousBlock: string, sealer: string) {
  const block = new Block(previousBlock, sealer);
  const targetHash = getTargetHash(DIFFICULTY);
  return block.process(targetHash);
}
