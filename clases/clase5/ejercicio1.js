
// ejercicio para imprimir la 1ra vocal usando prompt

var vocales = ["a", "e", "i", "o", "u"];
var palabra = prompt("Escribí algo"); // "hola"
var letra;
var posLetra = 0;

while (posLetra<palabra.length) {
		letra = palabra[posLetra];
		if (
			letra === "a" 
			|| letra === "e"
			|| letra === "i"
			|| letra === "o"
			|| letra === "u" 
		) {
		
		console.log (posLetra);
		console.log("La 1ra vocal del texto es "+ letra+ " en la posición "+(posLetra+1));
		break;
		}
		posLetra++
}	

