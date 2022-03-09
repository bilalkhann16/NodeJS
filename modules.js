//Modules.
// Encapsulate code and make it more readable.
const names = require('./names');
const sayHi = require('./utils');
const data = require('./alternative-flavor');

//calling the function mind-grenade to sum the two values.
require('./mind-grenade');


console.log("Calling data", data);

console.log(names); 

sayHi('bilal');
sayHi(names.Hello);
sayHi(names.prof);