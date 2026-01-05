// const fs = require("fs");
// fs.writeFile("Hello.txt", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", (err)=>{
//     if(err)console.log(err);
//     else console.log("Success! ");
// })

const fs = require("fs");
setTimeout(()=>{    //this is async..time lerha threadpool mei jaa
    console.log("B/f"); //5th o/p
},2000);
console.log("holaaaaaaaa"); //1st o/p
const save = fs.writeFile("abcdefghij.txt", "ASync", (err)=>{   //ab kyuki ye async hai to time lerha to threadpool mei gaya
    if(err)console.log(err);
    else console.log("done"); //4th o/p
});
console.log(save);//undefined 2nd o/p
console.log("holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"); //3rd o/p
setTimeout(()=>{
    console.log("A/f"); //6th o/p
},4000);