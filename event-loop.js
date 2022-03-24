// // started operating system proces.
// console.log('First, Hello World');
// setTimeout(() => {
//     console.log('second');
// },0);

// console.log('third');

//new example (setTimeout vs setInterval)
// setInterval(() =>{
//     console.log('Hello');
// },2000);
// console.log('I will run first.')

//https server example
const http = require('http');
const server = http.createServer((req,res) => {
    console.log('request event');
    res.end('Hello World');
});

server.listen(8888,() => {
    console.log('server is running on port 8000');
});