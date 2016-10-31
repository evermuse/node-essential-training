//exercise covering how to export modules

var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name) {

  this.name = name;

};

util.inherits(Person, EventEmitter); // adds EventEmitter to Person

module.exports = Person; //module.exports is a JS object ---- module.exports is the object that is returned by the require statement