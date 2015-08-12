var Mongo = require('mongodb').MongoClient;

var insertar = [
		{
			username: 'user1',
			name: 'Ricardo',
			email: 'ricardo@tuqueja.com'
		},
		{
			username: 'user2',
			name: 'Jaime',
			email: 'jaime@fb.com'
		}
	];

Mongo.connect('mongodb://localhost:27017/usuarios', function(err, db){
	if(err){
		throw new Error('no está corriendo el servidor mongo (mongod) o'
			+ ' no estás llegando a ese puerto o host');
	}


	db.collection('coleccionusers').insert(insertar, function(err){
		if(err){
			console.log(err);
			db.close();
			return;
		}
		console.log('users insertados correctamente');
		db.close(); //si no pongo esto el proceso no va a terminar
	});
});