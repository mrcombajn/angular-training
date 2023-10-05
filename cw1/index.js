import { createServer } from 'http'

createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
    console.log('Hello World!');
}).listen(8080);