var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
 	res.end('Hola mundo warumo');
}).listen(2333, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');