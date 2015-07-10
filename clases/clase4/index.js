
var i = 0;
while (i<10) {
	console.log(i);
	i
	i++;
}


alert("ESTE ALERT ES DEL index.JS", "otra <cosa></cosa>");

var numero = Number(prompt("Ingresa un número"));

/*if (numero%2 === 0) {
	alert("El número "+numero+" es par!");
}
else {
	alert("El número "+numero+" es impar!");
}*/



//Podemos usar esto para simplificar que se llama operador ternario

var parImparMensaje = (numero%2 === 0)? "Par" : "Impar";
alert("El número "+numero+" es "+parImparMensaje); 




//consola muestra si es par o impar del 0 hasta el 1000