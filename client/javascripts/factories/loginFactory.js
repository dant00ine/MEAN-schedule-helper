scribeApp.factory('loginFactory', function($http){

	var factory = {};

	factory.user_id;

	factory.login = function(login_info, callback){

		$http.post('/login', login_info).success(function(response){
			factory.user_id = response.id
			callback(response)
		})
	}

	factory.editPW = function(new_pw, callback){

		$http.post('/users/edit/'+this.user_id, new_pw).success(function(response){
			callback(response)
		})
		
	}

	return factory
});