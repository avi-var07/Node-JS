const fs = require ("fs");
fs.appendFile("abc.txt", "Hello", (err)=>{
    if(err)console.log(err);
    else console.log("Success!");
})