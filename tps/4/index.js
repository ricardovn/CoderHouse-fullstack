/*Parte 1
Crear un programa que dada una variable c​adena,​cree una nueva variable e invierta la 
posición de sus caracteres. Es decir, que cumpla con el siguiente comportamiento:*/

var cadena = prompt("Ingrese texto para invertirlo");
var cadenaInvertida = "";
for (i=1; i<=cadena.length; i++) {
	cadenaInvertida += cadena[cadena.length-i];
}	
console.log(cadenaInvertida);

/*Parte 2
Crear un programa que dada un variable a​rr,​cree una nueva variable e invierta la posición
 de sus elementos. Debe cumplir con el siguiente comportamiento:
Es requisito utilizar una forma de ciclo y no utilizar el método reverse de Array.*/

var arr = [];
var elemArr = prompt("Ingrese un elemento a invertir hasta decir 'basta'");
while (elemArr.toLowerCase() !== "basta") {
	arr.push(elemArr);
	elemArr = prompt("Ingrese nuevo elemento a invertir o diga 'basta'");
}
var arrInvertido = new Array(arr.length);

for (i=0; i<arr.length; i++) {
	arrInvertido[i] = arr[arr.length-1-i];
}	

console.log(arrInvertido); 

/* NOTA: Veo que retorna valores string por más que ingrese números.
Tendría que ver la forma de detectar cuando es un número y convertirlo 
a Number para que no lo muestre como string si no lo es. */