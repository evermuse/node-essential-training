// exercise covering making of directories with file system module

var fs = require("fs");

// first example doesn't check for existence first

/*

fs.mkdir("lib", function(err) {

  if (err) {

    console.log(err);

  } else {

    console.log("Directory Created");

  }

});

*/

// second example checks for existence first

if (fs.existsSync("lib")) {

  console.log("Directory already there");

} else {

  fs.mkdir("lib", function(err) {

    if (err) {

      console.log(err);

    } else {

      console.log("Directory Created");

    }

  });

}
