var express = require('express');
var router = express.Router();
var Mongo = require('mongodb').MongoClient;

Mongo.connect('mongodb://localhost:27017/usuarios', function(err, db){
	if(err){
		throw new Error('no está corriendo el servidor mongo (mongod) o'
			+ ' no estás llegando a ese puerto o host');
	}
	//las rutas
	router.get('/:username', function(req, res, next){

		db.collection('coleccionusers').find({username: req.params.username}).toArray(function(err,arr){
				// falta hacer la parte de errores, si err existe, render error. Si arr es undefined, render error, si arr tiene longitud 0, render error
				if (err || arr === undefined || arr.length === 0){
					res.render('error',{
						message: 'El usuario "' + req.params.username + '" no existe! Ponete las pilas!',
						error: {
						status: 400,
						stack: new Error().stack //esto no hace falta pero me limé :P
						}
					});
				}
				else {
					res.render('user',{
						name: arr[0].name,
						email: arr[0].email

					});
				}
			});
	});
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
