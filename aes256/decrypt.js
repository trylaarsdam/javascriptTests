const CryptoJS = require('crypto-js');

var ciphertext = "ee56cd433172d5ec433f3d201f39a9dc701ff17d10c09999b99f5045f6430e7b";
var key = "11111111111111111111111111111111";
var iv = "0000000000000000";

var ciphertextWA = CryptoJS.enc.Hex.parse(ciphertext);
var keyWA = CryptoJS.enc.Utf8.parse(key);
var ivWA = CryptoJS.enc.Utf8.parse(iv);
var ciphertextCP = { ciphertext: ciphertextWA };

var decrypted = CryptoJS.AES.decrypt(
    ciphertextCP,
    keyWA, 
    { iv: ivWA }
);

console.log(decrypted.toString(CryptoJS.enc.Utf8)); // Apple