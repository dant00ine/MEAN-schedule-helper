scribeApp.factory('locationFactory', function($http){

	var factory = {};

	factory.createLocation = function(new_location, callback){
		console.log('ngfactory LOCATION / CREATE');
		console.log(new_location);
		$http.post('/locations', new_location).success(function(response){
			callback(response);
		})
	}

	factory.allLocations = function(callback) {
		console.log('ngfactory LOCATIONS / GET');
		$http.get('/locations').success(function (output) {
			callback(output);
		})
	}

	factory.addShift = function(new_shift, callback) {
		console.log('ngfactory LOCATIONS / SHIFT', new_shift);
		$http.post('/locations/add_shift', new_shift).success(function (output){
			callback(output);
		})
	}

	return factory;

})