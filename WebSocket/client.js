const WebSocket = require("ws");
const socket = new WebSocket("ws://localhost:3000");

socket.on("open",()=>{
    console.log("Server connected");
    socket.send("Hello Server!");
})
socket.on("message", (data)=>{
    console.log("Server says: ", data.toString());
});