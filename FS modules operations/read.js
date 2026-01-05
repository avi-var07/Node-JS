const fs = require('fs');

fs.readFile('output.txt', 'utf-8', (err,data)=>{
    if(err)console.log('Pehle Error Thik kar fir kaam krwana', err);
    else console.log(data);
});