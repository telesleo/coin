export default function millisecondsToTimeString(milliseconds: number) {
  const hours = Math.floor(milliseconds / 3600000);
  const minutes = Math.floor((milliseconds % 3600000) / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);

  let time = [];

  if (hours > 0) {
    time.push(`${hours}h`);
  }
  if (minutes > 0 || hours > 0) {
    time.push(`${minutes}m`);
  }
  time.push(`${seconds}s`);

  return time.join(" ");
}
