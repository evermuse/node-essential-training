// exercise creating a server with http

var http = require("http");


// example 1 - serve plain text

/*

var server = http.createServer(function(req, res) {

  res.writeHead(200, {"Content-Type": "text/plain"});

  res.end("Hello World");

});

*/


// example 2 - serve html

var server = http.createServer(function(req, res) {

  res.writeHead(200, {"Content-Type": "text/html"});

  res.end(`

    <!DOCTYPE html>
    <html>
      <head>
        <title>HTML Response</title>
      </head>
      <body>

        <h1>Serving HTML Text</h1>
        <p>${req.url}</p>
        <p>${req.method}</p>

      </body>
    </html>

  `);

});

server.listen(3000);

console.log("Server listening on port 3000");

