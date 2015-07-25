// Ejercicio final de clase
/* Realizar una función que reciba un array y una función de filtrado y que mediante 
el uso explicito de forEach contabilice los elementos del array pasado que al aplicarle
la función recibida por parametro al elemento actual del forEach esta devuelva true
*/

//hacer un función de recorrido para que aplique el filtro al elemento actual

[3, 5, 9].forEach(function(curEl, curIndex, arr) {
	console.log(curEl, curIndex, arr);
});

var arr = [0,3,6,5,2,6,7];


function filtroPar(arr) {
	arr.forEach()
	if (arr%2 === 0) {
		par++
	}
}



function contarFiltro(arr , filtro) {
	arr.forEach
}

function filtro(var1, var2) {
	
	return 
	devuelve true o false
}

main(myArr, function(2,4))


// Sobre funciones
/*
function prueba(mensaje) {
	mensaje.indexOf("hola");
*/
	//console.log(mensaje);

//Ejercicio función buscarpares

/*function buscarPares(arr) {
	var res = [];
	if (!Array.isArray(arr)) {
	 	alert("no es array");
	 	return; //esto devuelve undefined
	 }
	for (i=0; i<arr.length; i++) {
		if (arr[i]%2 === 0) {
			res.push(arr[i]);
		}
	}
	return res;
}
var miArr = 121;
console.log(buscarPares(miArr)); // me devuelve los valores pares de esa array*/

// Ejercicio sobre como manejar errores

/*function agregarLength(arr) {
if (!
	Array.isArray(arr)) {
	throw new Error(
		"Expected arr to be an array, " + "but istead got: " + typeof arr
		);
}
arr.push(arr.length);
}

try {
	agregarLength("epfoejpfewofop");
}

catch(e) {
	console.log(e.message); 
}
*/

/*function crearArrayDeDosNumeros() {
	return [1,3];
}

function agregarLength(arr) {
if (!
	Array.isArray(arr)) {
	throw new Error(
		"Expected arr to be an array, " + "but istead got: " + typeof arr
		);
}
arr.push(arr.length);
}

function devolver	(arr) {
	try {
		agregarLength(arr);
	}

	catch(e) {
		arr = []
		agregarLength(arr);
	}
	
	return arr[arr.length - 1];
}

function main() {
	console.log(devolverUltimoValor());
}

main();
console.log("termine");*/
