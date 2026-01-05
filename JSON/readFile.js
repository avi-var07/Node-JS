const fs = require('fs');

fs.readFile('data.json' , 'utf-8', (err, data)=>{

    if(err){
        console.error("Error hai: ", err);
        return;
    }

    const user = JSON.parse(data);
    console.log("User Ka Naam hai: ", user.name);
    console.log("Age: ", user.age);
    console.log("City: ", user.city);
    console.log("Contact: ", user.contact);
    console.log("Address: ", user.address);
})