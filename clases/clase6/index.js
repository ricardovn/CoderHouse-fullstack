/*function hola() {
	askfjasfllkasjf
	console.log('mundo');
	return;
}

hola();*/
/*var obj = { a: 1}; //objeto con una key igual a 1
obj["a"] // si son numericas, se puede usar la otra notación que es obj.a
var obj = { a: {}}; // ahora tengo una key que es igual a un objeto
var obj = { a: function }*/

// Crear una función obtenerSuma que reciba un objeto y devuelva la suma de todos los valores de sus keys

/*var obj = { valor1: 2, valor2: 5, valor3: 1, valor4: 6, valor5: 7};

function obtenerSuma (obj) {
	var myKeys = Object.keys(obj);
	var suma = 0;

	for (i=0; i<myKeys.length; i++) {
		suma = += obj[myKeys[i]];
	}

	myKeys.forEach(function(curEl){ //con el forEach recorro todo el array. Con el for puedo cortarlo antes
		suma += obj[curEl];
	});

	return suma;
}

console.log(obtenerSuma(obj));*/

//EJERCICIO SOBRE TERREMOTOS

// 2 transformaciones: 1 agarrar el array crea un objeto que tenga como keys el nombre 
// de los paises y como value la cant de veces que aparece
// en un array que cada elemento sea key name y key value la cant de ocurrencias

// 2da transformación: crear un array de objetos donde cada objeto tenga un key pais con el nombre del pais
// del objeto viejo y otro key value con el value del key viejo


var datos = [ '2015-05-04T18:04:54.320Z, South Georgia and the South Sandwich Islands,5.4,mb,,54,5.654,1.03,us,us20002b8y,2015-05-04T18:23:43.605Z,"21km NNW of Visokoi Island, South Georgia and the South Sandwich Islands",earthquake',
	  '2015-05-04T16:19:30.989Zx, Nevada,3.18,ml,5,85.4,0.736,0.1914,nn,nn00492670,2015-05-04T17:02:50.040Z,"42km NNW of Currant, Nevada",earthquake',
	  '2015-05-04T14:50:24.490Z, Oklahoma,3,mb_lg,,61,0.492,0.29,us,us20002b70,2015-05-04T15:40:47.237Z,"22km W of Perry, Oklahoma",earthquake', 
	  '2015-05-04T16:19:30.989Zx, Nevada,3.18,ml,', 'sddsfef, Nevada      ,3r23r', 
	  ];

function ocurrenciaPais (array) {
	
	var resultado = {}; //objeto donde guardo pais y ocurrencia

	for(i=0; i<datos.length; i++) {
		pais = datos[i].split(",")[1].trim(); //trim me corta el espacio que tenia antes de la palabra
		
		if (resultado[pais] !== undefined) {
			// pais existe en resultado
			resultado[pais]++;
		} else {
			// pais no existe en resultado. Agregar
			resultado[pais] = 1;
			}
	}

return resultado;
}

var res = ocurrenciaPais(datos);

console.log(res);

// 2da transformación: crear un array de objetos donde cada objeto tenga un key pais con el nombre del pais
// del objeto viejo y otro key value con el value del key viejo

function formatoFinal (obj) {
// Object {South Georgia and the South Sandwich Islands: 1, Nevada: 3, Oklahoma: 1}
// {name: keyviejo, value: valueviejo}, {name: keyviejo, value: valueviejo}

var nuevoKey = []; // array donde voy a guardar los objetos con el nvo formato
var myKeys = Object.keys(obj); //array con los valores de los keys viejos

console.log(myKeys);

myKeys.forEach(function(curEl){
	var myObject = {name: curEl, value: obj[curEl]};
	nuevoKey.push(myObject);
});
return nuevoKey;
	
}

var paraGraficar = formatoFinal(res);

console.log(paraGraficar);
//init(paraGraficar);


/*
var obj = {

}


 var pais = datos[i];
 pais

}

console.log(datos);
*/



























