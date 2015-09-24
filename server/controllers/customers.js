var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function(){
	return {
		show: function(req, res){
			console.log('reached the frieds controllers show method');
			Customer.find({}, function(err, results){
				if(err){
					console.log(err);
				} else {
					res.json(results);
				}
			})
		},

		add: function(req, res){
			
			newCustomer = new Customer(req.body);
			newCustomer.save(function(err, results){
				console.log('results')
				console.log(results);
				// console.log(err);
				if(err){
					console.log('error triggered')
					error_messages =[];

					if(err.errors.name.properties.message){
						console.log('name')
						error_messages.push(err.errors.name.properties.message);
					}
					
					console.log("multiple messages?", error_messages);
					res.json({success: false, message: error_messages});
					// res.redirect('/');
				} else {
					console.log('no error')
					res.json({success: true, message: results});
				}
			})
		},
		delete: function(req, res){
			console.log('here to delete');
			console.log(req.params.id);
			Customer.remove({_id: req.params.id}, function(err, results){
				res.json(results);
			})
		}
	}
})();