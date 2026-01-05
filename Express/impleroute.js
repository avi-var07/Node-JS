const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'&&req.method==='GET'){
        res.end('<h1>GET Request to Home Page</h1>');
    }else if(req.url==='/about'&&req.method==='GET'){
        res.end('<h1>GET Request to About Page</h1>');
    }else{
        res.statusCode=404;
        res.end('<h1>404 Not Found</h1>');
    }
});

//Server listens on port 3000
server.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
});