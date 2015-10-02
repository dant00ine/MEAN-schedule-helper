scribeApp.controller('locations', function($scope, locationFactory){
		var shifts = [
				{
					id: 1, //location id repeated everyday
					title: 'Repeating Event',
					start: '2015-10-01' //the start of a moment object
				},
				{
					id: 1,
					title: 'Repeating Event',
					start: '2015-10-01'
				},
				{
					id: 1,
					title: 'Repeating Event',
					start: '2015-10-03'
				}
			];
		var shifts2 = [
				{
					id: 2,
					title: 'Repeating Event',
					start: '2015-10-04'
				},
				{
					id: 2,
					title: 'Repeating Event',
					start: '2015-10-05'
				},
				{
					id: 2,
					title: 'Repeating Event',
					start: '2015-09-06'
				}
			];
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
				var $allDay = $("<input type='checkbox' value='allDay'><label for='allDay'>I am Available all day</label><p>OR</p><p>Select the shifts you can work</p>");
		    	$infobox.append($allDay);
		    	$infobox.append("<p><input type='checkbox'><span>"+eventData.title+"</span></p>");
		    	$infobox.append("<p><span>"+eventData.start._i+"</span></p>");				
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
			eventLimit: true // allow "more" link when too many events			
		}).fullCalendar( 'addEventSource', shiftData );//this can be a URL to get the shifts
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
		locationFactory.addShift($scope.add_shift, function(response){
			console.log('response reached ngLocationController through factory callback', response);
		})
	}

		

});