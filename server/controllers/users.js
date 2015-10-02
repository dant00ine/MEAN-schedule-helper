var User = require('../models/user.js')

module.exports = (function(){
	return {
		create: function(req, res){
			console.log('SERVER USERSCONT', req.body)
			User.create(req, res)
		},

		validate: function(req, res){
			console.log('VALIDATE controller:', req.body)

			User.find(req, res)


			// console.log("find results:", results)
			// console.log('bod:',res.body)
			// console.log('json:',res.json)
		}

		
	}
})();