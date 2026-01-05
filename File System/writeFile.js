const fs = require("fs");
fs.writeFile("Hello.txt", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", (err)=>{
    if(err)console.log(err);
    else console.log("Success! ");
})