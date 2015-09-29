
scribeApp.controller('login', function($scope, loginFactory){
	var that = this;
//that = this either is usable
	// ScheduleFactory.getSchedules(function(data){
	// 	that.schedule = data;
	// 	console.log(data);
	// });

	that.getLogin = function(){
		console.log('in the ngController', that.login);

		// LoginFactory.sendLogin(that.new_customer, function(response){
		// 	console.log(response, "from addCustomer, in callback")
		// 	if(response.success){
		// 		CustomerFactory.getCustomers(function(get_customers){
		// 			that.customers = get_customers; // that != original this is necessary
		// 		})
		// 	} else {
		// 		that.errors = response.message;
		// 		console.log("errors",that.errors);
		// 		CustomerFactory.getcustomers(function(get_customers){
		// 			that.customers = get_customers;
		// 		})
		// 	}
		// });
	}
	// that.deleteCustomer = function(customer_id){
	// 	console.log("trying to delete customer");
	// 	CustomerFactory.deleteCustomer(customer_id, function(response){
	// 		console.log("callback after customer is deleted");
	// 		CustomerFactory.getCustomers(function(get_customers){
	// 				that.customers = get_customers; 
	// 		})
	// 	})
	// }
})// that added, $scope converted to that throughout after the var that = this variable set.
