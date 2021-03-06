scribeApp.controller('locations', function($scope, locationFactory){
	
	var that = this;

	var shifts = [
		{start: "2015-10-02", title:"Morning Shift"},
		{start: "2015-10-04", title:"Afternoon Shift"},
		{start: "2015-10-05", title:"Morning Shift"},
		{start: "2015-10-07", title:"Evening Shift"},
		{start: "2015-10-18", title:"Morning Shift"},
		{start: "2015-10-24", title:"Graveyard Shift"},
	];

	var shiftData = function() {
		locationFactory.allShifts(function (output){
		$scope.shifts = output;
	
		var split_time = $scope.shifts[0].start_time.split("T"); //splitting original database shift timestamp on "T", where time part starts

		var shifts3 = [];
		for(var i = 0; i < 3; i++){

			split_time[0] = moment().date(i)._d.toString().split(" "); //splitting the datestamp on spaces (" ")
			split_time[0][4] = split_time[1]; 
			var shift = "";
			for(var k = 0; k<split_time[0].length; k++){
				shift += split_time[0][k]+" ";
			}


			
			var shift_start = moment(shift, "ddd MMM DD YYYY HH:mm:ss").format();
			shift_start._isUTC = true;
			console.log(shift_start);
			$scope.shifts[0].start = shift_start;
			console.log($scope.shifts[0].start);
			shifts3.push({title:'Repeating Event', allDay: false, start: $scope.shifts[0].start});
		}
		console.log(shifts3);
		console.log(split_time);
		return shifts3;
		}) 
	}

	

	// console.log(all_shifts);
	var loadCalendar = function(shiftData){

		var $overlay = $("<div id='overlay'></div>");
		

		console.log($scope.working);
		$("body").append($overlay);
		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next',
				center: 'title',
				right: 'month,agendaDay'
			},
		    eventClick: function( eventData ) {
		    	


		    	//on event click pull from db all event for the moment start with location id
		    	var $infobox = $("<div id='infobox'></div>");
				var $buttons = $("<button>Cancel</button> "+"<button>Submit</button>");
				var $allDay = $("<p>Select the shifts you can work</p><input type='checkbox' class='checkbox' value='allDay'><label class='checkbox_text' for='allDay'>I am Available all day</label><p>OR</p>");
		    	$infobox.append("<h3>"+eventData.start._d.toDateString()+"</h3>");				
		    	$infobox.append($allDay);
		    	$infobox.append("<p><input type='checkbox' class='checkbox'><span class='checkbox_text'>"+eventData.title+"</span></p>");
				$infobox.append($buttons);
				$overlay.append($infobox);
		    	//add lighbox with the pulled info
		    	$overlay.show();
		    	$buttons.click(function(){
		    		$overlay.hide();
		    	});
		    },
			defaultDate: moment(),//gets todays date
			editable: false,//makes the calendar static
			eventLimit: true, // allow "more" link when too many events	
			events:shifts

		});//this can be a URL to get the shifts
	}
	$scope.working = "working with scope";
	loadCalendar(shifts);

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
		console.log($scope.new_shift);
		locationFactory.addShift($scope.new_shift, function(response){
			console.log('response reached ngLocationController through factory callback', response);
			console.log($scope.new_shift);
		})
	}

		

});