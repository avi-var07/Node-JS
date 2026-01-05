const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1>Home pe hai aap</h1>');
    }else if(req.url==='/about'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1>Hello Bachooooooooooooo</h1>');
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end('<h1>Kyu Nahi Ho rhi padhai?</h1>');
    }
});

server.listen(3000, ()=>{
    console.log('Server is running on http://localhost:3000');
})