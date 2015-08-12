# Semana 10#

## Repaso TP8

Fetch es una interfaz, jQuery para hacer ajax 

Request, es el node server

## Express

Cualquier aplicación express es un conjunto de middlewares

npm express-generator -g 

### Middlewares:

Por qué: Si quiero ver a mi servidor como algo más modular. Enchufar cosas

Son etapas.

(es del lado del servidor. recibimos solicitudes y respondemos solicitudes)

inicio -> a -> b -> c -> d -> end

inicio= un momento de tiempo
end= el último middleware o cuando vos lo matas

parsear el body: que ante una solicitud devuelva un json. A nosotros nos llega como una propiedad de la solicitud

Me facilita el manejo de solicitud-respuesta
Me da abstracciones que son utiles como por ej lo de leer el body (interpretar lo que el cliente manda)


### Rutas:
(es del lado del server)
son middlewares pero los está agregando a una ruta especifica:
va a tener efecto sólo cuando una solicitud caiga en esa ruta
ej:
app.use('/', routes); (dice que cuando llega una solicitud con '/' apunta a routes) 


app.use(function(req, res, next){
	console.log(req.method, req.url);
	
});	


next: es una referencia al cliente middleware, no a uno en particular. Siempre hay que decirle si continua o corta

por ejemplo el end sería un 404

dentro de cada middleware que utilices, hay que preguntar si hubo un error, y mostrar 500. 

En login por ej el concepto es que si no está autenticado el user, corta el flujo de middlewares


hay dos archivos en routes:
index.js
users.js

En index.js:
module.exports = router está 

### Template Engine: 

algo que mediante valores renderiza esos valores y los muestra con ese formato
(esto afecta al cliente nada más)

## MongoDB

El shell está implementado en JavaScript

Databases
	Collections
		-CRUD (Create, Read, Update, Delete)
		Documents -> JSON (en realidad se llama VISO)
			
		
NO es una base de datos relacionales
POrque no te da soporte nativo a colecciones. Pero podés hacerlo. Nada más que no conviene.


Relacionales usan sql. Fueron diseñadas para maquinas potentes y escala verticalmente

No relacional escala horizontalmente

Si quiero usar algo, lo uso. No hace falta definirlo.

comandos:
show collections
db.micoleccion.insert({ a: 1, b: 2})
db.micoleccion.find()

			> db.micoleccion.insert({ a: 1, b: 2})
				WriteResult({ "nInserted" : 1 })
			> db.micoleccion.find()
			{ "_id" : ObjectId("55c64402f2a18a6b209e2c9b"), "a" : 1, "b" : 2 }

db.otracoleccion.update({ lalala:3 }, {lo que quiero poner})

lo que estaba antes lo piso con lo que está ahora

En caso de no indicarle nada, reemplaza la 1ra ocurrencia en forma secuencial

Podes aplicarlo a varios:
db.otracoleccion.update({ lalala:3}, {}, { multi:true})

En relacional tenes un esquema y las tablas estan relacionadas con campos. Acá se puede 

db.otracoleccion.remove({ "_id" : ObjectId("55c6465cf2a18a6b209e2c9c" })

(los filtros pueden ser por los criterios que quiera)



Crear documento:
puedo crear docs sin restricciones

No vamos a programar en el shell sino en nuestro server

Es raro que estes en una aplicacion solo con no relacional. Gralmente usas ambos tipos

x	






