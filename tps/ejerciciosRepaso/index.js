/* Ejericio 1

Hacer una función que reciba dos parámetros del tipo string. La función deberá retornar la
cantidad de apariciones que tiene el segundo parámetro en el primer parámetro. Ejemplo:
console.log(contarOcurrencias("sarasa", "a")); // imprime 3
console.log(contarOcurrencias("sarasa", "z")); // imprime 0
*/

function contarOcurrencias(str1, str2){
	var acum = 0;
	for (i=0; i<str1.length; i++){
		if (str2 === str1[i]){
			acum++
		}
	}
	return acum;
}
console.log(contarOcurrencias("sarasa", "a")); // imprime 3
console.log(contarOcurrencias("sarasa", "z")); // imprime 0


/* Ejercicio 2
Hacer una función que reciba una string y retorne la misma string
pero agregando después de cada caracter su índice correspondiente.
Es decir, que retorne la misma string transformada de la siguiente forma:
console.log(agregarIndice("kawabonga")); // imprime "k0w1a2b3o4n5g6a7"
console.log(agregarIndice("casa")); // imprime "c0a1s2a3"
*/

function agregarIndice(str){
	var strIndice = "";
	for (i=0; i<str.length; i++){
		strIndice += str[i]+i;
		}
	return strIndice;
}
console.log(agregarIndice("kawabonga")); // imprime "k0w1a2b3o4n5g6a7"
console.log(agregarIndice("casa")); // imprime "c0a1s2a3"

/* Arrays Ejercicio 1
Hacer una función que reciba un array de strings y retorne una
string igual a la concatenación de todos sus elementos. Ejemplo:
console.log(concatenar(["s","a","r","a","s","a"])); // imprime "sarasa"
console.log(concatenar(["h","o","l","a"])); // imprime "hola"
*/

function concatenar(arr){
	var str = "";
	for (i=0; i<arr.length; i++){
		str += arr[i];
	}
	return str;
}
console.log(concatenar(["s","a","r","a","s","a"])); // imprime "sarasa"
console.log(concatenar(["h","o","l","a"])); // imprime "hola"

/* Arrays Ejercicio 2
Hacer una función que reciba un array y retorne otro array con la misma
cantidad de elementos, pero qué cada elemento sea el tipo de dato del
array original. Ejemplo:
console.log(transformarATipos([1,"casa", {}])); // imprime ["number", "string", "object"]
console.log(transformarATipos([function(){}, true]); // imprime ["function", "boolean"]
*/

function transformarATipos(arr){
	var array = [];
	for (i=0; i<arr.length; i++){
		array.push(typeof arr[i]);
	}
	return array;
}
console.log(transformarATipos([1,"casa", {}])); // imprime ["number", "string", "object"]
console.log(transformarATipos([function(){}, true])); // imprime ["function", "boolean"]

/* Objetos Ejercicio 1
Hacer una función que reciba un objeto y retorne un array con todos los valores
de sus propiedades cómo elementos. Ejemplo:
console.log(aArrayDeValores({ a: 1, b: "z", c: 3})); // imprime [1, "z",3]
console.log(aArrayDeValores({ a: "f", b: true})); // imprime ["f", true]
*/

function aArrayDeValores(obj){
	var array = [];
	var myKeys = Object.keys(obj);
	myKeys.forEach(function(curEl){
		array.push(obj[curEl]);
	});
	return array;
}
console.log(aArrayDeValores({ a: 1, b: "z", c: 3})); // imprime [1, "z",3]
console.log(aArrayDeValores({ a: "f", b: true})); // imprime ["f", true]

/* Objetos Ejercicio 2
Hacer una función que reciba un objeto el cual posee propiedades con
valores de string y retorne una string cómo resultado de la concatenación
de todos los valores de las propiedades del objeto. Ejemplo:
console.log(concatenarObj({ a: "h", b:"o",c:"l", d:"a"})); // imprime "hola"
console.log(concatenarObj({ z: "sa", x:"ra", y:"sa"})); // imprime "sarasa"
*/

function concatenarObj(obj){
	var str = "";
	var myKeys2 = Object.keys(obj);
	myKeys2.forEach(function(curEl){
		str += obj[curEl];
	});
	return str;
}
console.log(concatenarObj({ a: "h", b:"o",c:"l", d:"a"})); // imprime "hola"
console.log(concatenarObj({ z: "sa", x:"ra", y:"sa"})); // imprime "sarasa"

