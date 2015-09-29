
var users = require('../controllers/users.js')

module.exports = function(app) {
    
    app

	.post('/users', function(req, res){
		console.log('data passing through server routes', req.body)
		users.create(req, res)
	})

	// .get('/*', function(request, response){
	// 	response.redirect('/')
	// })

	// .post('/*', function(request, response){
	// 	response.redirect('/')
	// })

  }