const express = require("express");
const app = express();
const port = 3000;

function logger(req, res, next){
    console.log(`${req.method}${req.url}`);
    next();
}
app.use(logger);

app.get("/", (req,res)=>{
    res.send("Home Page");
});
app.get("/about", (req,res)=>{
    res.send("About Page");
});
app.get("/contact", (req,res)=>{
    res.send("Contact Page");
});

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
})