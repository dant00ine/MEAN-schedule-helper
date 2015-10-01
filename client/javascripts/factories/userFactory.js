scribeApp.factory('userFactory', function($http){

	var factory = {};

	factory.createUser = function(new_user, callback){

		console.log('ngfactory USERS / CREATE')
		console.log(new_user);
		$http.post('/users', new_user).success(function(response){
			callback(response)
		})
	}


	return factory;
})