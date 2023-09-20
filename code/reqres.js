var http = require("http");

function samp(req,res) {
    if(req.url=="/")
    {
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<html><body><p>Hello admin</p></body></html>"+req.url);
        res.end();
    }
    else if(req.url=="/student")
    {
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<html><body><p>Hello student</p></body></html>"+req.url);
        res.end();
    }
    else
    {
        res.end("Invalid");
    }
}

var server=http.createServer(samp);
server.listen(2000);
console.log("Server started")