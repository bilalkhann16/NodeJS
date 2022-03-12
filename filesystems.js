// practicing the different modules like Sync, Async, Streams, etc.
const {readFile, writeFile, readFileSync, writeFileSync} = require('fs');
const first = readFileSync('./content/first.txt', 'utf8'); // synchronous, encoding is optional
const second = readFileSync('./content/second.txt', 'utf8'); // synchronous, encoding is optional

// console.log(first,second);

//writing the new file.
writeFileSync('./content/new-result-file.txt', `Here is the result of the concatenation of the two files: ${first} ${second}`);