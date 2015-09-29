// scribeApp.factory('loginFactory', function($http){

// 	// var Customers = [];
// 	var factory = {};

// 	factory.getCustomers = function(callback){
// 		$http.get('/customers').success(function(output){
// 			console.log('reached Customer factory get');
// 			callback(output);
// 		})
// 	}

// 	factory.addCustomer = function(info, callback){
// 		console.log(info);
// 		$http.post('/customers', info).success(function(response){
// 			console.log('angular factory for add customer reached', response);
// 			if(response.success){
// 				console.log("response was a success in factory")
// 				callback(response);
				
// 			} else {
// 				console.log("response was a FAILURE from factory")
// 				console.log("errors:", response.message)
// 				callback(response);
// 			}
// 		})

// 	}
// 	factory.deleteCustomer = function(customer_id, callback){
		
// 		$http.delete('/customers/'+customer_id).success(function(response){
// 			console.log('trying to go to routes');
// 			callback(response);
// 		})
// 	}

// 	return factory
// });