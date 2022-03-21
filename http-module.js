const http = require('http');


//webserver keeps listening for requests
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Hello World');
    }
    
    console.log(req)
    res.write('Welcome, This is Bilal K.');
    res.end()
})

server.listen(8888)