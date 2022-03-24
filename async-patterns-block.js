//async blocking patterns.
const http = require('http');
const server = http.createServer((req,res) => {
    if (req.url === '/') {
        console.log('request event');
        res.end('Home page');
    }
    if (req.url === '/about') {
        //blocking code!
        for (let i = 0; i < 1000; i++) {
            console.log(i);
        }
        res.end('About page');

    }
});

server.listen(8888,() => {
    console.log('server is running on port 8000');
});