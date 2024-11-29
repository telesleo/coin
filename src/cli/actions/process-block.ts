import processBlock from "../../currency/process-block";
import millisecondsToTimestamp from "../../tools/milliseconds-to-time-string";

export default function processBlockAction(args: { sealer: string }) {
  console.log("Processing...");
  performance.now();
  const hash = processBlock("", args.sealer);
  console.log(hash);
  const milliseconds = performance.now();
  console.log(`Time: ${millisecondsToTimestamp(milliseconds)}`);
}
