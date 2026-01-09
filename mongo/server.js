const express = require("express");
const app = express();

require("./db");
const User = require("./models/User");

app.use(express.json());
app.post("/users", async(req, res)=>{
    try{
        const user = new User(req.body);
        await user.save();
        res.status(401).json(user);
    }
    catch(err){
        res.status(400).json({error: err.message});
    }
})
app.get("/users", async(req, res)=>{
    const users = await User.find();
    res.json(users);
})
app.put("/users/:email", async(req, res)=>{
    const result = await User.updateOne(
        {email: req.params.email},
        {$set: req.body}
    );
    res.json(result);
})
app.listen(3000);