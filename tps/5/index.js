function multiplicar(num1, num2) {
	return num1*num2;
}

function obtenerResultados(operacion) {
	var resultado = [];
	for (var i=1; i<arguments.length; i+=2) {
		if (typeof arguments[i] !== "number" || typeof arguments[i+1] !== "number"){
				if (arguments[i+1] === undefined){
					throw new Error ("Te falta agregar un número más");
				}
				else {
					throw new Error (arguments[i] + " o " + arguments[i+1] +
						" NO es un número. Reemplaza el valor incorrecto");
					}
		}
		resultado.push(operacion(arguments[i],arguments[i+1]));
	}
	return resultado;
}