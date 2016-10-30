//exercise working with stdin and stdout to ask questions to the prompt and then echo them back afterward.

var questions = [

  "What is your name?",
  "What is your favorite hobby?",
  "What is your preferred programming language?"

];

var answers = [];

function ask(i) {

  process.stdout.write(`\n\n\n\n ${questions[i]}`);

  process.stdout.write(" > ");

}

process.stdin.on('data', function(data) {

  //below was used to demonstrate node's asynchronous capabilities to echo answers
  //process.stdout.write('\n' + data.toString().trim() + '\n');

  answers.push(data.toString().trim());

  if (answers.length < questions.length) {

    ask(answers.length);

  } else {

    process.exit();

  }

});

process.on('exit', function() {

  process.stdout.write("\n\n\n\n");

  process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later!`);

  process.stdout.write("\n\n\n\n");

});

ask(0);




