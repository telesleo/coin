import Block from "../../currency/block";
import millisecondsToTimeString from "../../tools/milliseconds-to-time-string";

export default function processBlockAction(sealer: string) {
  const block = new Block("", sealer);
  if (!block.verify()) {
    console.log("Invalid block");
    return;
  }
  performance.now();
  const hash = block.process();
  const milliseconds = performance.now();
  console.log(`${hash} - ${millisecondsToTimeString(milliseconds)}`);
  console.log(block.toJson());
}
