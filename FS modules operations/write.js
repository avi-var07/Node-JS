const fs = require('fs');

fs.writeFile('output.txt', 'Hello Bachooooooo ', (err)=>{
    if(err)console.log('Pehle Error Thik kar fir kaam krwana', err);
    else console.log('Likh Diya!');
});