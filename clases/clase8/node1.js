/*//filesystem
var fs = require('fs');

console.log('sync', readFileSync('textFile3.txt'));

fs.readFile('textFile1.txt', 'utf8', function(err, resultado){ //son 2 parametros de readFile donde uno es una función
	//console.log('termino');
	console.log('error:', err);
	console.log('resultado:', resultado);
	fs.readFile('textFile2.txt', 'utf8', function(err, res){
	console.log(err, res);
	});
});

*/


/*setTimeout(function(){ console.log('setTimeout');}. 5000);*/
//console.log('hola');


//////////// EJERICIO CLASE //////////////

/* Escribir un programa que devuelva una suma de todos
los parametros que recibe el proceso node y hacer un console log de la suma*/

//recorro array, paso a number, acumulo, siguiente. Cuando termino, muestro el resulta
// voy a descartar la posición 0 y 1. Empiezo a contar desde 2 en adelante

// crear una funcion que transforme los parametros que son string a number

/*var parametros = process.argv;

function sumaParametros(array) {
	var suma = 0;
	for (i=2; i<array.length;i++) {
		suma += Number(array[i]);
	};
	return suma;
}

console.log('el resultado es: ' + sumaParametros(parametros));*/

/////////////// EJERCICIO 2 CLASE  //////////////

/* Se pide hacer un programa que imprima el resultado de haber
concatenado el contenido de archvios especificados por parametro.
Nota: el resultado tiene que ser en el orden que se pasaron los
nombres de archivos

el problema está ne que quiere que usemos readFile
juntar resultados que vinieron de manera asincronica
*/

var fs = require('fs');

var curFilename;
var filenames = process.argv.slice(2);
var processed = 0;
var filesContents = [];
var i;

function createReadHandler(pos) {
	return function(error, content) {
		var result;
		processed++;

		if (error) {
			console.log(error);
			return;
		}

		filesContents[pos] = content;

		if (processed === filenames.length) {
			result = filesContents.reduce(function(prevContent, curContent) {
				return prevContent + curContent;
			}, "");
			console.log(result);
		}
	};
}

for (i=0; i<filenames.length; i++) {
	curFilename = filenames[i];

	fs.readFile(curFilename, 'utf8', createReadHandler(i));
}


///////// EJERCICIO 3 CLASE ///////////
/*Hacer un programa que reciba una ruta de un directorio por parametro
e imprima una sola vez por consola los directorios contenidos en esa ruta
e imprimirlos al final
usar readdir y stat (usando isDirectory que devuelve true or false)

var path = require("path");
var absFilename = path.join(basePath, relFilename);

*/



