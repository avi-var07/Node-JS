const express = require("express");
const http = require("http");
const {Server} = require("socket.io");
const app= express();
const server = http.createServer(app);
const path = require("path")
const io = new Server(server);
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
})
io.on("connection", (socket)=>{
    console.log("User connected: ", socket.id);
    socket.on("chatMessage", (msg)=>{
        console.log("Message: ", msg);
        io.emit("chatMessage", msg);
    });
    socket.on("disconnect", ()=>{
        console.log("User disconnected");
    });
});

server.listen(4000);