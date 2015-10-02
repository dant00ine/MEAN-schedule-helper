
var users = require('../controllers/users.js')
var locations = require('../controllers/locations.js')

module.exports = function(app) {
    
    app

    // .get('/users', function(req, res){
    // 	console.log("Cookies:", req.cookies)
    // 	console.log("request body:", req.body)
    // 	users.find(req, res)
    // })

	.post('/users', function(req, res){
		console.log('data passing through server routes', req.body)
		users.create(req, res)
	})

	.post('/users/edit', function(req, res){
		console.log('data passing through server routes', req.body)
		users.editPW(req, res)
	})

	.post('/login', function(req, res){
		console.log('routes request:', req.body)
		users.find(req, res)
	})

	.post('/locations', function(req, res){
		console.log('data passing through server routes', req.body);
		locations.create(req, res);
	})

	.post('/locations/add_shift', function(req, res){
		console.log('data passing through server routes', req.body);
		locations.add_shift(req, res);
	})	

	.get('/locations', function(req, res){
		console.log('getting locations through server routes');
		locations.all(req, res);
	})

	.get('/login', function(req, res){
		res.send({user_id: req.session.user_id})

	.get('/shifts', function(req, res){
		console.log('getting all shifts by location in routes');
		locations.all_shifts(req, res);
	})

	// .get('/*', function(request, response){
	// 	response.redirect('/')
	// })

	// .post('/*', function(request, response){
	// 	response.redirect('/')
	// })

  }