const fs = require('fs');

fs.writeFile('Baigan.txt', 'Hello Bachooooooo ', (err)=>{
    if(err)console.log('Pehle Error Thik kar fir kaam krwana', err);
    else console.log('Likh Diya!');
});

fs.appendFile('Baigan.txt', 'Kya haal chaal?', (err)=>{
    if(err)console.log("Jaa Pehle Error thik kar", err);
    else console.log('jaa dekh le');
})

fs.readFile('Baigan.txt', 'utf-8', (err,data)=>{
    if(err)console.log('Pehle Error Thik kar fir kaam krwana', err);
    else console.log(data);
});