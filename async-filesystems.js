// practicing the different modules like Async filesystems
const {readFile, writeFile} = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err){
        console.log('err:',err);
    }
    // console.log('result',result);
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err){
            console.log("err:",err);
            return;
        }
        const second = result;
        writeFile('./content/new-result-file.txt', `Here is the result of the concatenation of the two files: ${first} ${second}`, (err) => {
            if (err){
                console.log('err:',err);
                return
            }
            console.log('The file has been written:',result);
        }
        )
    });


});