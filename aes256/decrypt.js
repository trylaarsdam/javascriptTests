const CryptoJS = require('crypto-js');

var ciphertext = "7lbNQzFy1exDPz0gHzmp3FZXMYcrjZKtkkkLsKXCmbQ=";
var key = "11111111111111111111111111111111";
var iv = "";

var ciphertextWA = CryptoJS.enc.Base64.parse(ciphertext);
var keyWA = CryptoJS.enc.Utf8.parse(key);
var ivWA = CryptoJS.enc.Utf8.parse(iv);
var ciphertextCP = { ciphertext: ciphertextWA };

var decrypted = CryptoJS.AES.decrypt(
    ciphertextCP,
    keyWA, 
    { iv: ivWA,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Iso10126 
    }
);

console.log(decrypted.toString(CryptoJS.enc.Utf8)); // Apple