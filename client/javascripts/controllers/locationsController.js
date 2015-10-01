scribeApp.controller('locations', function($scope, locationFactory){

	var that = this;

	locationFactory.allLocations(function (output){
		$scope.locations = output;
	});


	locationFactory.allShifts(function (output){
		$scope.shifts = output;
		console.log($scope.shifts);

		})

	$scope.createLocation = function(){
		console.log('ngController / LOCATIONS / CREATE')
		locationFactory.createLocation($scope.new_location, function(response){
			console.log('response reached ngLocationController through factory callback:', response)
		});
	};

	$scope.addShift = function(){
		console.log('ngController / SHIFT / CREATE');
		console.log($scope.new_shift);
		locationFactory.addShift($scope.new_shift, function(response){
			console.log('response reached ngLocationController through factory callback', response);
			console.log($scope.new_shift);
		})
	}

		

});