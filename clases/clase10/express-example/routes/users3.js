var express = require('express');
var router = express.Router();
var users = {
	user1: {
		name: 'Ricardo',
		email: 'ricardo@tuquejasuma.com'
	},
	user2: {
		name: 'Jaime',
		email: 'jaime@facebook.com'
	}
};

router.get('/:userId', function(req, res, next){
	if (users[req.params.userId] === undefined){
		res.render('error',{
			message: 'El usuario "' + req.params.userId + '" no existe! Ponete las pilas!',
			error: {
			status: 400,
			stack: new Error().stack //esto no hace falta pero me limé :P
			}
		});
	}
	else {
		res.render('user',{
		/* mandar name y email que correspondan al user de la solicitud*/
		id: req.params.userId,
		name: users[req.params.userId].name,
		email: users[req.params.userId]['email'] // es lo mismo pero llamandolo de otra forma
		});
	}
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
