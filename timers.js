//exercise working with event listeners and timing functions

var waitTime = 3000;
var currentTime = 0;
var waitInterval = 10;
var percentWaited = 0;


//write the waiting percent to stdout

function writeWaitingPercent(p) {

  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting ... ${p} %`);

}


//calculate the interval

var interval = setInterval(function() {

  currentTime += waitInterval;
  percentWaited = Math.floor((currentTime / waitTime) * 100);
  writeWaitingPercent(percentWaited);

}, waitInterval);


//set the timeout

setTimeout(function() {

  clearInterval(interval);
  writeWaitingPercent(100);
  console.log("\n\ndone\n\n");

}, waitTime);


process.stdout.write("\n\n");
writeWaitingPercent(percentWaited);