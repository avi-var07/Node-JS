const express = require("express");
const app = express();

app.get("/search", (req,res)=>{
    console.log(req.query);
    res.send("DONE");
})
app.listen(3000);