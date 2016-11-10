var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {

  res.writeHead(200, {"Content-Type": "text/html"})


}).listen(3000);

console.log("Form server is listeninig on port 3000");

