import { DIFFICULTY, TARGET_HASH_SIZE } from "../constants";

export default function getTargetNumberFromDifficulty() {
  const difficultyClamped = Math.min(Math.max(0, DIFFICULTY), TARGET_HASH_SIZE);
  const targetHash = [
    ...new Array(difficultyClamped).fill("0"),
    ...new Array(TARGET_HASH_SIZE - difficultyClamped).fill("f"),
  ].join("");
  return BigInt(`0x${targetHash}`);
}
