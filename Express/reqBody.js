const express = require("express");
const app = express();

app.use(express.json());

app.post("/login", (req, res)=>{
    console.log(req.body);
    res.send("Done");
})

app.listen(3000);