var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
	name: String,
	item: String,
	quantity: Number,
	created_at: {type: Date, default: Date.now}
});

mongoose.model('Order', OrderSchema);