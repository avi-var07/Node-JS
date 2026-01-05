const fs = require('fs');

fs.rename('op.txt', 'output.txt', (err)=>{
    if(err)console.log("Jaa Pehle Error thik kar", err);
    else console.log('Kardiya change');
});