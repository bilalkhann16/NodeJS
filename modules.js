//Modules.
// Encapsulate code and make it more readable.
const names = require('./names');
const sayHi = require('./utils');

console.log(names); 

sayHi('bilal');
sayHi(names.Hello);
sayHi(names.prof);