// customerApp.factory('orderFactory', function($http){
// 	console.log('orderFactory loaded');
// 	var factory = {};

// 	factory.getCustomers = function(callback){
// 		$http.get('/customers').success(function(output){
// 		console.log('getting customers for order partial', output)
// 			callback(output);
// 		})
// 	}

// 	factory.getOrders = function(callback){
// 		$http.get('/orders').success(function(output){
// 			callback(output);
// 		})
// 	}

// 	factory.addOrder = function(info, callback){
// 		$http.post('/orders', info).success(function(response){
// 			callback(response);
// 		})
// 	}


// 	return factory
// });