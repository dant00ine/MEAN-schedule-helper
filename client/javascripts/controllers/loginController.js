
scribeApp.controller('login', function($scope, $location, loginFactory){
	var that = this;

	that.user_id;

	loginFactory.checkUser(function(response){
		that.user_id = response.user_id;
	})


	that.login = function(){

		console.log("login controller info:", that.info)
		loginFactory.login(that.info, function(response){

			if(response.admin){
				//REDIRECT TO ADMIN DASH
				$location.path('/admin_calendar')
			} else {
				//REDIRECT TO USER
				$location.path('/user_calendar')
			}
		})

	}

	that.editPW = function(){
		console.log("edit password ngController:", that.new_pw)
		if(that.new_pw == that.new_pw_conf){
			
			loginFactory.editPW(that.new_pw, function(response){
				console.log('response ngController EDITPW:', response)
			})

		} else {
			that.error == "type with care young gakusei"
		}
	}
		
})
