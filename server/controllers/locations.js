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
		},

		add_shift: function(req, res){
			console.log("SERVER Locations CONT (shift add)");
			Location.add_shift(req, res);
			console.log(req.body);
		},

		all_shifts: function(req, res){
			console.log("SERVER locations CONT (get / all shifts");
			Location.get_shifts(req, res);
		}

	}
})();