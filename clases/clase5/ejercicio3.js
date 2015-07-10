/*Dada una cadena de caracteres hacer un programa que cuente 
todos los caracteres numericos mayores a un nro ingresado mediante 
prompt*/

var cadenaCaracteres = prompt("Escribí una cadena de caracteres"); 
var i;
var cantNum = 0;
var numIngresado = prompt("Escribí un número");

for (i=0; i<cadenaCaracteres.length; i++) {
		if (Number(cadenaCaracteres[i]) > numIngresado) {
			//Number(letra) devuelve NaN y comprando false > numero da false
			cantNum++;
			/*console.log(cadenaCaracteres[i]);*/
		}
		
}	
console.log("Cadena ingresada: "+cadenaCaracteres);
console.log("El texto tiene "+ cantNum + " caracteres numericos mayores a " + numIngresado 
	+ " de una cadena de "+cadenaCaracteres.length+ " caracteres");

