
scribeApp.controller('login', function($scope, loginFactory){
	var that = this;

	that.login = function(){

		console.log("login controller info:", that.info)
		loginFactory.login(that.info, function(response){
			console.log('response through controller callback:', response)
			if(response.success){
				res.redirect('')
			} else {
				//ERROR HANDLING
			}
		})

	}
		
})
