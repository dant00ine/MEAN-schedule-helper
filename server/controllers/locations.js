var Location = require('../models/location.js')

module.exports = (function(){
	return {
		create: function(req, res){
			console.log('SERVER Locations CONT', req.body)
			Location.create(req, res);
		},

		all: function(req, res){
			console.log("SERVER Locations CONT (get)")
			Location.get_locations(req, res);
		}



	}
})();