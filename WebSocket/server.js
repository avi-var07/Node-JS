const WebSocket = require("ws");
const wss = new WebSocket.Server({port: 3000});
wss.on("connection",(socket)=>{
    console.log("Client connected!");
    socket.send("Hello Client!");

    socket.on("message",(data)=>{
        console.log("Client says: ", data.toString());
        socket.send("Server recieved");
    })
    socket.on("close",()=>{console.log("Client Disconnected!")});
});
