scribeApp.controller('locations', function($scope, locationFactory){

	var that = this;

	locationFactory.allLocations(function (output){
		$scope.locations = output;
	});

	$scope.createLocation = function(){
		console.log('ngController / LOCATIONS / CREATE')
		locationFactory.createLocation($scope.new_location, function(response){
			console.log('response reached ngLocationController through factory callback:', response)
		});
	};

	$scope.addShift = function(){
		console.log('ngController / SHIFT / CREATE');
		locationFactory.addShift($scope.add_shift, function(response){
			console.log('response reached ngLocationController through factory callback', response);
		})
	}

		

});