
scribeApp.controller('login', function($scope, $location, loginFactory){
	var that = this;

	that.login = function(){

		console.log("login controller info:", that.info)
		loginFactory.login(that.info, function(response){
			console.log('response through controller callback:', response)
			if(response.admin){
				//REDIRECT TO ADMIN DASH
				$location.path('/admin_calendar')
			} else {
				//REDIRECT TO USER
				$location.path('/user_calendar')
			}
		})

	}
		
})
