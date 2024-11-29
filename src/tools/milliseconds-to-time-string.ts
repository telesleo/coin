export default function millisecondsToTimeString(milliseconds: number) {
  const hours = Math.floor(milliseconds / (1000 * 60 * 60));
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

  let timeString = "";

  if (hours > 0) {
    timeString += `${hours}h ${minutes}m`;
  } else if (minutes > 0) {
    timeString += `${minutes}m `;
  }
  timeString += `${seconds}s `;

  return timeString;
}
