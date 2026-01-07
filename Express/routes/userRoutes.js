const express = require("express");
const app = express();

const router = express.Router();

router.get("/users", (req, res)=>{
    res.status(200).json({
        users: ["A", "B", "C"]
    });
});

router.post("/login", (req, res)=>{
    res.status(200).json({
        messsage: "LOGIN SUCCESS"
    });
});
module.exports = router;