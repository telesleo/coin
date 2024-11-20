"use strict";
// import { ec as EC } from 'elliptic';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const ec = new EC('secp256k1');
// const key = ec.genKeyPair();
const crypto_1 = __importDefault(require("crypto"));
const message = 'Hello, World!';
const hash = crypto_1.default.createHash('sha256').update(message).digest();
const binaryHash = Array.from(hash)
    .map(byte => byte.toString(2).padStart(8, '0'))
    .join('');
console.log(binaryHash);
