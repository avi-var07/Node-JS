const fs = require('fs');

fs.readFile('students.json','utf-8', (err, data)=>{
    if(err){
        console.log(err);
        return;
    }
    const student = JSON.parse(data);

    student.forEach(s=>{
        s.marks +=5;
    });
    const updatedData = JSON.stringify(student, null,2);

    fs.writeFile('students.json',updatedData,(err)=>{
            if(err){
                console.error("Error updating file:",err);
                return;
            }
            console.log("Students Data updated successfully");
        });
    
});

fs.readFile('books.json','utf-8',(err, data)=>{
    if(err){
        console.log(err);
        return;
    }


    const book = JSON.parse(data);

    book[0].price1 = 70000000;

    const update = JSON.stringify(book,null, 2);
    fs.writeFile('books.json',update,(err)=>{
            if(err){
                console.error("Error updating file:",err);
                return;
            }
            console.log("Books data updated successfully");
        });

});