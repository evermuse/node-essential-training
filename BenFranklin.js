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

var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name) {

  this.name = name;

};

util.inherits(Person, EventEmitter); // adds EventEmitter to Person

var ben = new Person("Ben Franklin");

ben.on('speak', function(said){

  console.log(`${this.name}: ${said}`);

});

ben.emit('speak', "You may delay, but time will not.");