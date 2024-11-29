export default function bufferToBinaryString(buffer: Buffer) {
  return Array.from(buffer)
  .map(byte => byte.toString(2).padStart(8, '0'))
  .join('');
}
