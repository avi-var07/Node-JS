const net = require("net");
const server = net.createServer((socket)=>{
    console.log("Client Connected!");
    socket.write("Hello Client");
    socket.write("Hello Client");
    socket.on("data", (data)=>{
        console.log("Client says: ", data.toString());
    });
    socket.on("end",()=>{
        console.log("Client disconnected!");
    });

});

server.listen(4000);