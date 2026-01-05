const express = require('express')
const app = express();

app.get('/', (req,res)=>{
    res.send('Hello from Rajdhani Express');
});

app.listen(3000, ()=>{
    console.log("Horha hai server run, http://localhost:3000")
})