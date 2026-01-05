const fs = require('fs');

fs.appendFile('output.txt', 'Kya haal chaal?', (err)=>{
    if(err)console.log("Jaa Pehle Error thik kar", err);
    else console.log('jaa dekh le');
})