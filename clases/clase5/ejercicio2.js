//hacer un programa que mediante un prompt 
//obtenga una cadena de texto y luego imprima 
//por consola la cantidad de vocales que esta cadena 
//de texto contiene

var cadenaTexto = prompt("Escribí algo"); // "hola"
var i = 0;
var cantVocales = 0;

while (i<cadenaTexto.length) {
		if (
			cadenaTexto[i] === "a" 
			|| cadenaTexto[i] === "e"
			|| cadenaTexto[i] === "i"
			|| cadenaTexto[i] === "o"
			|| cadenaTexto[i] === "u" 
		) {
		cantVocales++
		}
		i++
}	
console.log("El texto tiene "+ cantVocales + " vocales");
