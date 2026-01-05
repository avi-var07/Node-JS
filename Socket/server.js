const net =require('net');

const server= net.createServer((socket)=>{
    console.log('Client Connected');
    socket.write('Welcome Client');

    socket.on('data',(data)=>{
        console.log('Client says: '+data);
    });     
});
server.listen(4000,()=>{
    console.log("Server running on port 4000");
})  