var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = (function(){
	return {
		show: function(req, res){
			Order.find({}, function(err, results){
				res.json(results);
			})
		},

		add: function(req, res){
			newOrder = new Order(req.body);
			newOrder.save(function(err, results){
				res.json(results);
			})
		}

	}
})();