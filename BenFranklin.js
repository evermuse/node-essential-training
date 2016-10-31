//exercise working with event emitters to listen for events

//first example

/*

var events = require('events');

var emitter = new events.EventEmitter(); //Event emitter is a constructor

emitter.on('customEvent', function(message, status) {

  console.log(`${status}: ${message}`);

});

emitter.emit('customEvent', "Hello World", 200);

*/

//second example

/* code below moved to Person.js to demonstrate modules

var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name) {

  this.name = name;

};

util.inherits(Person, EventEmitter); // adds EventEmitter to Person

*/

var Person = require("./lib/Person"); //custom modules requires Path

var ben = new Person("Ben Franklin");
var george = new Person("George Washington");

george.on('speak', function(said) {

  console.log(`${this.name} -> ${said}`);

});

ben.on('speak', function(said) {

  console.log(`${this.name}: ${said}`);

});

ben.emit('speak', "You may delay, but time will not.");
george.emit('speak', "It is far better to be alone, than to be in bad company.");