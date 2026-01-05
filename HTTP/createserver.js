const http  = require('http');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Heeeloooo, Welcome to Node Js Server!');
});


//Server listens on port 3000

server.listen(3000, ()=>{
    console.log('Server is running on http://localhost:3000');
})