
var users = require('../controllers/users.js')
var locations = require('../controllers/locations.js')

module.exports = function(app) {
    
    app

	.post('/users', function(req, res){
		console.log('data passing through server routes', req.body)
		users.create(req, res)
	})

	.post('/users/edit/:id', function(req, res){
		console.log('data passing through server routes', req.body)
		users.editPW(req, res)
	})

	.post('/login', function(req, res){
		console.log('routes request:', req.body)
		users.validate(req, res)
	})

	.post('/locations', function(req, res){
		console.log('data passing through server routes', req.body);
		locations.create(req, res);
	})

	.post('/locations/add_shift', function(req, res){
		console.log('data passing through server routes', req.body);
		locations.create(req, res);
	})	

	.get('/locations', function(req, res){
		console.log('getting locations through server routes');
		locations.all(req, res);
	})

	// .get('/*', function(request, response){
	// 	response.redirect('/')
	// })

	// .post('/*', function(request, response){
	// 	response.redirect('/')
	// })

  }