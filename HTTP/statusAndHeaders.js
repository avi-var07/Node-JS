const http = require("http");
const server = http.createServer((req,res)=>{
    if(req.method==='GET'&&req.url==='/'){
        res.writeHead(200,{"Content-type":"text/plain"});
        res.end("Home Page");
    }
    else if(req.method === 'GET'&&req.url==='/about'){
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ name: "Aviral" }));
    }
    else res.end("Page Not Found");
});

server.listen(3000);