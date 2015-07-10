/* mediante 2 prompt recibir dos cadenas de texto, e imprimir la posicion en la cual 
ocurre la 2 en la primera o imprimir "no se encontró ocurrencia", en caso contrario usando 
indexOf(). Agregamos un nuevo prompt para pedir si busca del comienzo o del final */

var str1 = prompt("Escribir texto");
var str2 = prompt("Escribir texto a buscar en el 1ro");
var orientacion = prompt("indicar con 'primera' o 'ultima' por donde busca");
var resultado;

while (!(orientacion === "primera" || orientacion === "ultima")) {
	orientacion = prompt("te dije que pongas primera o ultima wey!");
}

if (orientacion === "primera") {
	resultado = str1.indexOf(str2);
}
	else {
		resultado = str1.lastIndexOf(str2);
	}
if (!(resultado === -1)) {
		console.log("Se encontró " +str2+ " en la cadena "+str1+".\n La ocurrencia aparece a partir del caracter nro "+resultado);
}
	else {
		console.log("no se encontró ocurrencia");
	}

