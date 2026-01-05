const fs = require('fs');

const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Kya Haal chaal?');
writeStream.write('Meow?');
writeStream.write('Namaste');


writeStream.end();

writeStream.on('finish', ()=>{
    console.log("File Wirting hogyi!");
})