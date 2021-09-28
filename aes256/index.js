var aes256 = require('aes256');

var key = 'jaoiwejioajiweojtoaiwjeyiojawioejyioawjeyoajweyoiawjeoyijawoeiyjawoejyaoweijyaowieyjaoijtlfkjasdfnasdnfbzd.'

// var encryptedBuffer = aes256.encrypt(key, buffer);
// console.log(encryptedBuffer.toString('utf8'));
// var decryptedBuffer = aes256.decrypt(key, encryptedBuffer);
//console.log(decryptedBuffer.toString('utf8'));

const fs = require('fs');

const readStream = fs.createReadStream('./audio-plain.m4a', {highWaterMark: 16});
const data = [];

var encryptedReadStream;
const data2 = [];

readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data :', chunk, chunk.length);
    // data : <Buffer 49 20 61 6d 20 74 72 61 6e 73 66 65 72 72 69 6e> 16
    // data : <Buffer 67 20 69 6e 20 62 79 74 65 73 20 62 79 20 62 79> 16
    // data : <Buffer 74 65 73 20 63 61 6c 6c 65 64 20 63 68 75 6e 6b> 16
});

readStream.on('end', () => {
    console.log('end :', Buffer.concat(data).toString());
    var encryptedBuffer = aes256.encrypt(key, Buffer.concat(data));
    fs.writeFile('audio-encrypted.m4a', encryptedBuffer, (err) => {
      // throws an error, you could also catch it here
      if (err) throw err;
      
      // success case, the file was saved
      console.log('saved');
      encryptedReadStream = fs.createReadStream('./audio-encrypted.m4a', {highWaterMark: 16});

      encryptedReadStream.on('data', (chunk) => {
        data2.push(chunk);
        //console.log('data :', chunk, chunk.length);
        // data : <Buffer 49 20 61 6d 20 74 72 61 6e 73 66 65 72 72 69 6e> 16
        // data : <Buffer 67 20 69 6e 20 62 79 74 65 73 20 62 79 20 62 79> 16
        // data : <Buffer 74 65 73 20 63 61 6c 6c 65 64 20 63 68 75 6e 6b> 16
      });
      
      encryptedReadStream.on('end', () => {
          console.log('end :', Buffer.concat(data2).toString());
          var decryptedBuffer = aes256.decrypt(key, Buffer.concat(data2));
          fs.writeFile('audio-decrypted.m4a', decryptedBuffer, (err) => {
          })
          // end : I am transferring in bytes by bytes called chunk
      })
      
      encryptedReadStream.on('error', (err) => {
          console.log('error :', err)
      })
    });
  
    // end : I am transferring in bytes by bytes called chunk
})

readStream.on('error', (err) => {
    console.log('error :', err)
})

