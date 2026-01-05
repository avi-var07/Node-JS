const fs = require('fs');

const readStream= fs.createReadStream('input.txt','utf8');
const writeStream = fs.createWriteStream('copy.txt'); 

readStream.pipe(writeStream);

console.log('File copied using pipe method.');