const {readFile} = require('fs');
console.log('Started the first task');
//check the file path.
readFile('./content/first.txt', (err, data) => {
    if (err) {
        console.log('Error reading the file');
        return;
    }
    console.log(data.toString());
    console.log('Finished the first task');
});
console.log('Started the second task');