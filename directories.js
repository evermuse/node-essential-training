// working with directories using fs

var fs = require("fs");

// example 1 - rename directory

/*

fs.renameSync("./assets/logs", "./logs");

console.log("Directory moved");

*/

// example 2 - remove directories

/* succesful part of part 2 below

fs.rmdir("./assets", function(err) {

  if (err) {

    throw err;  // when you throw an error, the app will crash / not continue

  }

  console.log("Assets Directory Removed");

});

*/

// example 3 - remove directory with files in it

fs.readdirSync("./logs").forEach(function(filename) {   // have to handle every file in the directory before it can be deleted

  fs.unlinkSync("./logs/" + filename);

});

fs.rmdir("./logs", function(err) {

  if (err) {

    throw err;

  }

  console.log("logs directory removed");

});