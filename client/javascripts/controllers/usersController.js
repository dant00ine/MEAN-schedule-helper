scribeApp.controller('users', function($scope, userFactory){

	var that = this;

	$scope.createUser = function(){
		console.log('ngController / USERS / CREATE')
		userFactory.createUser($scope.new_user, function(response){
			console.log('response reached ngController through factory callback:', response)
		})
	}


});