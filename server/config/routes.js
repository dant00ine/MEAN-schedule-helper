
var users = require('../controllers/users.js')

module.exports = function(app) {
    
    app

	.post('/users', function(req, res){
		console.log('data passing through server routes', req.body)
		users.create(req, res)
	})

	.post('/login', function(req, res){
			console.log('routes request:', req.body)
			console.log('response from login:', res.body)
			users.validate(req, res)
		}

    );

	

	// .get('/*', function(request, response){
	// 	response.redirect('/')
	// })

	// .post('/*', function(request, response){
	// 	response.redirect('/')
	// })

  }