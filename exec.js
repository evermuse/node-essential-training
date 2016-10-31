//exercise working with exec and child processes

var exec = require("child_process").exec;


// first example to open website

//exec("open http://www.linkedin.com");


// second example to open a terminal window

// exec("open -a Terminal");


// third example 'ls' to command line

/*

exec("ls", function(err, stdout) {

  if (err) {

    throw err;

  }

  console.log("Listing Finished");

  console.log(stdout);

});

*/

// fourth example 'git version' to command line

exec("git version", function(err, stdout) {

  if (err) {

    throw err;

  }

  console.log("Git Version Executed");

  console.log(stdout);

});
