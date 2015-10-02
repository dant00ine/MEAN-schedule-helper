scribeApp.factory('loginFactory', function($http){

	var factory = {};

	factory.user_id;

	factory.login = function(login_info, callback){

		$http.post('/login', login_info).success(function(response){
			factory.user_id = response.id
			console.log("user_id in factory:",factory.user_id)
			callback(response)
		})

		console.log('')
	}

	factory.checkUser = function(callback){
		$http.get('/login').success(function(response){
			callback(response);
		})
	}

	factory.editPW = function(new_pw, callback){
	
		$http.post('/users/edit', new_pw).success(function(response){
			callback(response)
		})
		
	}

	return factory
});