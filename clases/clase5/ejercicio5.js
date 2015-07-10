/* mediante un prompt y un array ingresar elementos hasta que me aparezca la palabra basta
luego imprir por consola el array resultante*/

var texto;
var arr = Array();

do {
	texto = prompt("Ingresa un texto");
	arr.push(texto);
}

while (!(texto === "basta"))
//arr.pop();
console.log(arr);


