//2nd exercise working with this file to demonstrate write and append

var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

var fs = require("fs"); // necessary to add for file system

var realPerson = {

  name: '',
  sayings: []

};

rl.question("What is the name of a real person? ", function(answer) {

  realPerson.name = answer;

  fs.writeFileSync(realPerson.name + ".md", `${realPerson.name}\n===============\n\n`); // creates the file

  rl.setPrompt(`What would ${realPerson.name} say? `);

  rl.prompt();

  rl.on('line', function(saying) {

    realPerson.sayings.push(saying.trim());

    fs.appendFile(realPerson.name + ".md", `* ${saying.trim()} \n`, function(err) {

      console.log(err);

    }); // append sayings

    if (saying.toLowerCase().trim() === 'exit') {

      rl.close();

    } else {

      rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);

      rl.prompt();

    }

  });

});

rl.on('close', function(){

  console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);

  process.exit();

});