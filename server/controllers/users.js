var User = require('../models/user.js')

module.exports = (function(){
	return {
		create: function(req, res){
			User.create(req, res)
		},

		find: function(req, res){
			User.find(req, res)
		},

		editPW: function(req, res){
			User.editPW(req, res)
		}
	}
})();