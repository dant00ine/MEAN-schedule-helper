var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
	name: String,
	created_at: {type: Date, default: Date.now}
});

mongoose.model('Customer', CustomerSchema);

CustomerSchema.path('name').required(true, 'Customer name cannot be blank');