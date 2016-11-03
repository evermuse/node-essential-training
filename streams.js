// exercise working with readable file streams

var fs = require("fs");

//example 1 - the readFile way which could produce latency if the file was long enough

/*

fs.readFile("./chat.log", "UTF-8", function(err, chatlog) {

  console.log(`File Read ${chatlog.length}`);

});

console.log("Reading File");

*/

//example 2 - stream method

var stream = fs.createReadStream("./chat.log", "UTF-8");   // important to have UTF-8 otherwise it will be read as binary

var data = ""; // use this variable to concatenate all the chunks into a variable

stream.once("data", function() {      // lets user know stream event has started

  console.log("\n\n\n");
  console.log("Started Reading File");
  console.log("\n\n\n");

});

stream.on("data", function(chunk) {  // writes out to the console the size of the chunk

  process.stdout.write(` chunk: ${chunk.length} |`);

  data += chunk;

});

stream.on("end", function() {       // lets user know stream event has ended

  console.log("\n\n\n");
  console.log(` Finished Reading File ${data.length}`);
  console.log("\n\n\n");

});