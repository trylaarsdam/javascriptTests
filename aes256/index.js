var aes256 = require('aes256');
var plaintext = 'this is a test';
var buffer = Buffer.from(plaintext);

var key = 'jaoiwejioajiweojtoaiwjeyiojawioejyioawjeyoajweyoiawjeoyijawoeiyjawoejyaoweijyaowieyjaoijtlfkjasdfnasdnfbzd.'

var encryptedBuffer = aes256.encrypt(key, buffer);
console.log(encryptedBuffer.toString('utf8'));
var decryptedBuffer = aes256.decrypt(key, encryptedBuffer);
console.log(decryptedBuffer.toString('utf8'));