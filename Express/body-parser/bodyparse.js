const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/details',(req,res)=>{
    console.log(req.body);
    const name = req.body.name;
    const age = req.body.age;
    console.log(name, age);
    res.send(`My name is: ${name} and age is: ${age}`);
});

app.listen(3000, ()=>console.log('Server running on port http://localhost:3000/details'));