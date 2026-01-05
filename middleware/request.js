const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next)=>{
    req.requestTime = new Date().toLocaleString();
    next();
});

app.get("/", (req, res)=>{
    res.send("Request Time: "+req.requestTime);
});

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
})