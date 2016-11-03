//exercise working with streams using this promptPerson template

var readline = require('readline');

var fs = require('fs');

var rl = readline.createInterface(process.stdin, process.stdout);

var realPerson = {

  name: '',
  sayings: []

};

rl.question("What is the name of a real person? ", function(answer) {

  realPerson.name = answer;


  // adding stream data

  var stream = fs.createWriteStream(realPerson.name + ".md");

  stream.write(`${realPerson.name}\n===============\n\n`);


  rl.setPrompt(`What would ${realPerson.name} say? `);

  rl.prompt();


  // use the stream

  rl.on('line', function(saying) {

    if (saying.toLowerCase().trim() === 'exit') {

      stream.close();
      rl.close();

    } else {

      realPerson.sayings.push(saying.trim());
      stream.write(`* ${saying.trim()} \n`);

      rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
      rl.prompt();

    }

  });

});

rl.on('close', function(){

  console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);

  process.exit();

});