const fs = require('fs');

fs.readFile('data.json', 'utf-8', (err, data)=>{
    if(err){
        console.err("Error aagyi!!", err);
        return;
    }

    let student = JSON.parse(data);
    student.age=20.5;
    student.city="Amritsar"; 
    const updatedData=JSON.stringify(student,null,2);

     fs.writeFile('data.json',updatedData,(err)=>{
        if(err){
            console.error("Error updating file:",err);
            return;
        }
        console.log("Data updated successfully");
    })

})