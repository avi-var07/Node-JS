const fs=require('fs');

const student={
    name:"Aviral",
    age:20,
    city:"Jalandhar",
    isStudent:false,
    contact:8687883676,
    address:"Jalandhar,Punjab,India"
}
const jsonData= JSON.stringify(student, null,2);

fs.writeFile('data1.json',jsonData,(err)=>{
    if(err){
        console.error("Error writing file:",err);
        return;
    }
    console.log("Data written successfully");
})