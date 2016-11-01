//exercise working with the fs module to list files synchronously and asynchronously

var fs = require("fs");

// first example

// var files = fs.readdirSync('./lib');


// second example -- when you drop 'Sync' from command makes it asynchronous

fs.readdir('./lib', function(err, files) {

  if (err) {

    throw err;

  }

  console.log(files);

});

console.log("Reading Files...");