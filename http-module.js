const http = require('http');


//webserver keeps listening for requests
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Hello World');
    };
    if (req.url === '/about') {
        res.end('About page response');
    };
    res.end(
        `<h1>Page you're trying to find doesn't exist. </h1>`
    )
})

server.listen(8888)