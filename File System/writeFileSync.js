const fs = require("fs");
setTimeout(()=>{    //this is async..time lerha threadpool mei jaa
    console.log("B/f"); //4th o/p
},2000);
console.log("holaaaaaaaa"); //1st o/p
const save = fs.writeFileSync("abcdefg.txt", "SYnc");
console.log(save);//undefined 2nd o/p
console.log("holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"); //3rd o/p
setTimeout(()=>{
    console.log("A/f"); //5th o/p
},4000);