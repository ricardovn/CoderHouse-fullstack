var str2 = "bar";
var	str1 = "foo";
var str3 = str1+str2;

// me fijo si str1 empieza con "f" o "b"
// console.log(str1[0] === "f" || str1[0] === "b")

//imprimir a consola si str1 empieza con una consonante

var consonantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var i = 0;

while (i<consonantes.length) {
	if (str1[0] === consonantes[i]) {
		console.log (str1[0]);
		console.log("La variable comienza con la consonante "+ str1[0]);
	}	
	i++;
}


//prueba de for

for (i = 0; i < 10; i++) { 
	console.log(i);
	console.log(i*2);
}
