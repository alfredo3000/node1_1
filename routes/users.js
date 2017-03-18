var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
  	status:1,
  	data:[
  	{id:1, nombre: 'Carlos 1', apellido: 'Perez'},
  	{id:2, nombre: 'Carlos 2', apellido: 'Perez'},
  	{id:3, nombre: 'Carlos 3', apellido: 'Perez'},
  	{id:4, nombre: 'Carlos 4', apellido: 'Perez'},
  	{id:5, nombre: 'Carlos 5', apellido: 'Perez'}
  	]
  });
});

router.get('/aldia', function(req, res, next){
	res.send('Usuarios al dia');

});

router.get('/:id', function(req, res, next){
	var idUser = req.params.id; //parámetro GET
	//POST req.body.<variable>
	res
		.status(200)
		.send('Has solicitado el usuario '+ idUser);

});

router.post('/', function(req, res, next){
	console.log(req.body);
	User.create(req.body, function(err, user){
		if(err){
			res.send({
				status:0,
				mensaje: 'Ocurrío Error',
				error:err,
			});
		}else{

			res.send({
				status:1,
				mensaje: 'Usuario Creado',
				data:user,
			});
		}
	});

});

module.exports = router;
