const CryptoJS = require('crypto-js');

var ciphertext = "IPwm3rNQ3bVWWfJobRv2whs3LTGymK4dtxWmIdqBe5dZraZDnCErpFKoTNT3H5KuS5BhWuW91KiIcOFbxK/UEg==";
var key = "RgUkXp2s5v8y/B?D(G+KbPeShVmYq3t6";
var iv = "q3t6w9z$C&F)J@Nc";

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