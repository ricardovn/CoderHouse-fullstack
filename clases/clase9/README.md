# Semana 9#


## Redes. HTTP, Express

### Redes

Dirección IP

Interna: la veo con ifconfig en mac

	inet 10.24.65.16 netmask 0xff000000 broadcast 10.255.255.255
	
Pública: Con lo que salimos a la red de internet

ej: protocolo http

host: www.google.com/

path: /paginax

Es un protocolo para enviar y recibir mensajes

Se usan verbos para decir que voy a hacer

- GET (recibir)
- POST (publicar)
- PUT (si quiero editar algo)
- UPDATE
- etc

El navegador asume que cuando ingresas un sitio, querés hacer un GET para obtener esos recursos

Haciendo clic en un elemento de DevTools Network te muestra los headers donde obtengo info sobre la IP pública desde donde obtengo ese elemento, el tipo de contenido, la fecha en que se obtuvo, etc

Es un protocolo basado en solicitud, respuesta

Cada navegador tiene un User-agent asignado:

La firma que representa ese tipo de navegador. Por ej en mi 
Chrome muestra:

* User-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.125 Safari/537.36

A cada solicitud -> Respuesta

Respuestas:

- 200 -> Ok
- 201 -> contenido creado
- 2xx
- 3xx -> redirección
- 4xx -> errores
- 5xx ->  errores del server

En response puedo ver el código fuente original (antes de que el navegador lo renderice)

puerto 80: http

puerto 443: https

This simple web server written in Node responds with "Hello World" for every request.

	This simple web server written in Node responds with "Hello World" for every request.

	var http = require('http');
	http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/plain'});
  	res.end('Hello World\n');
	}).listen(1337, '127.0.0.1');
	console.log('Server running at http://127.0.0.1:1337/');

A la sección de la respuesta que va a tener contenido, la llamamos Body

Si quisieramos sólo servir contenido estatico, entonces node no tiene mucho sentido

Tiene sentido para aplicaciones y contenido no estatico

## JSON
Es un formato para pasar información.

En el caso de de JSON.stringify(obj) lo uso para serializar un objeto. Devuelve un string

Datos que pueden ir en un JSON: nros, strings, array

También puedo usar JSON.parse('{ "b": 5, "a": 1}') para pasar un string a objetos

Si queremos validar que está OK el formato, tenemos que usar un try catch

Las keys de los objetos se entrecomillan y para el string tiene que tener el formato de objeto correcto.


## Ejercicio: Simular aplicación de Twitter
# 

Del cliente al server, mando el tiempo, el usuario y el contenido del tuit

req = request = solicitud

req.headers.user
req.headers.timestamp

String vacio en JSON es por ej JSON.parse('""') o JSON.parse('null')

Por defecto: un host no puede hacer una consulta a otro host. A menos que tenga un header que tenga una policy

en la practicas no conviene usar setinterval sino settimeout

El server responde linealmente. Por eso el server resuelve de 1 request por vez

Donde gano es con lo asyncronico

### Enunciado del ejercicio:

Cada X cantidad de segundos, hacer un GET a /data

Por cada elemento de la lista que responda el servidor,

agregarlo haciendo $('#contenedor .centre').append(htmlDelTweet)

HINT: usar la function getHTMLforTweet, que recibe un objeto que representa

un tweet y devuelve un objeto que representa su HTML

$.ajax(obj).then(fn1).catch(fn2);

Ajax jQuery:
http://api.jquery.com/jquery.ajax/

Para instalar dependencias JSON:
se hace npm install (que lee el package.json e instala las dependencias que estaban definidas en ese archivo)

Para ver paquetes en NPM:
https://www.npmjs.com/package/minimist

para correr el server y que detecte cambios para actualizar la ejecución, usar:
supervisor node xx.js


