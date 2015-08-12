/* Clase 10 */


var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

var server = http.createServer(fn);
server.listen(1337);
console.log('Server running at http://127.0.0.1:1337/');

/* En node, nosotros tenemos que hacer el servidor.

me llega una solicitud a un path en particular

si la url es / entonces me fijo en el index.html o index.php, etc


si la url es /texto.txt y existe
entonces leo el texto.txt y lo escribo
a la respuesta: seteo el content type
y escribo 200 de status code
termino la respuesta
si no existe: 404*/