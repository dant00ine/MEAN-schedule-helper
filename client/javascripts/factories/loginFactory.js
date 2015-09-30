scribeApp.factory('loginFactory', function($http){

	// var Customers = [];
	var factory = {};

	factory.login = function(login_info, callback){

		$http.post('/login', login_info).success(function(response){
			callback(response)
		})
	}

	return factory
});