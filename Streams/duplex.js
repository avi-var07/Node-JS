const net =require('net');

const server=net.createServer((socket)=>{
    console.log('Client connected.');

    //data from client
    socket.on('data', (chunk)=>{
        console.log('Received from client:', chunk.toString());
        //echo back to client
        socket.write('Server received: ' + chunk);
    });
});

server.listen(3000, ()=>{
    console.log('Server listening on port 3000');
});