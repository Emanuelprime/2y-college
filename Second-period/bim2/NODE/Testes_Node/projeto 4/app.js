const fs = require("fs");
const http = require("http");
const path = require("path")

http.createServer(function(req, res){

    if(req.url === "/"){
        fs.readFile("index.html", function(err, data){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        });
    }
    else if(req.url.match("\.css$")){
        var csspath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(csspath);
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);
    }
    else if(req.url.match("\.png$")){
        var pngpath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(pngpath);
        res.writeHead(200, {"Content-Type": "image/png"});
        fileStream.pipe(res);
    }
    else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("<h1>Pagina não encontrada</h1>");
    }


}).listen(8080);