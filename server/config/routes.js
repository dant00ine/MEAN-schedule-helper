
var users = require('../controllers/users.js')
var locations = require('../controllers/locations.js')

module.exports = function(app) {
    
    app

	.post('/users', function(req, res){
		console.log('data passing through server routes', req.body)
		users.create(req, res)
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