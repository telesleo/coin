import crypto from 'crypto';

const hash = crypto.createHash('sha256');

export default function hashString(value: string) {
  return hash.update(value).digest();
}
