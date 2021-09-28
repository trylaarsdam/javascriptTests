const CryptoJS = require('crypto-js');

const salt = CryptoJS.lib.WordArray.random(16);
const iv = CryptoJS.lib.WordArray.random(16);

const key = CryptoJS.PBKDF2('my password', salt, { keySize: 256/32, iterations: 4096, hasher: CryptoJS.algo.SHA256});

const encrypted = CryptoJS.AES.encrypt('That is our super secret text', key, {iv: iv}).ciphertext;

const concatenned =  CryptoJS.lib.WordArray.create().concat(salt).concat(iv).concat(encrypted)

console.log({
  iv: iv.toString(CryptoJS.enc.Base64),
  salt: salt.toString(CryptoJS.enc.Base64),
  encrypted: encrypted.toString(CryptoJS.enc.Base64),
  concatenned: concatenned.toString(CryptoJS.enc.Base64)
});