var User = require('../models/user.js')

module.exports = (function(){
	return {
		create: function(req, res){
			console.log('SERVER USERSCONT', req.body)
			User.create(req, res)
		}
	}
})();