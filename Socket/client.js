const net = require("net");
const client = net.createConnection({port: 4000},()=>{
    console.log("Server Connected! ");
    client.write("Hii Server");
});
client.on("data",(data)=>{
    console.log("Server says: ",data.toString());
});
client.on("end",()=>{
    console.log("Server disconnected");
})
