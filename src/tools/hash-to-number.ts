export default function hashToNumber(hash: string) {
  return BigInt("0x" + hash);
}
