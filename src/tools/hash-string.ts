import crypto from "crypto";

export default function hashString(value: string) {
  return crypto.createHash("sha256").update(value).digest("hex");
}
