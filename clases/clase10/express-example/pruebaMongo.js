var Mongo = require('mongodb').MongoClient;

Mongo.connect('mongodb://localhost:27017/test2', function(err, db){
	if(err){
		throw new Error('no está corriendo el servidor mongo (mongod) o'
			+ ' no estás llegando a ese puerto o host');
	}

	//console.log(err, db);
	// CRUD
/*	db.collection('otracoleccion').insert({texto: 'desde node'}, function(err){
		if(err){
			console.log(err);
			return;
		}
	console.log('insertó correctamente');
	db.close() //si no pongo esto el proceso no va a terminar
	});*/
	var cursor = db.collection('otracoleccion').find({texto: 'desde node'});

	// De esta forma no estoy guardando la consulta en memoria sino mostrandola nada más.
	// Lee de a 1 y vuelve a leer hasta que encuentra un evento end.

	//funcion de listener para escuchar el evento data
	cursor.on('data', function(data){
		console.log(data);
	});

	// me aseguro de que llegué al final de la data de ese cursor
	cursor.on('end', function(){
		db.close();
	});

	// está cargando toda la busqueda en un array y por eso va a usar más memoria
	/*db.collection('otracoleccion').find({texto: 'desde node'}
		).toArray(function(err, res){
			if(err){
				console.log(err);
			}
		}
		console.log(err, res);
	});*/
});