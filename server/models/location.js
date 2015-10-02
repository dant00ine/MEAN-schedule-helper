var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'ScribeShifts'
});



module.exports = (function(){
	return {
		
		create: function(req, res){


			console.log('LOCATION MODEL', req.body)

			var query = "INSERT INTO locations (name, created_at, updated_at) VALUES (?, ?, ?)"

			var now = new Date();

			var values = [req.body.name, now, now]

			connection.query(query, values, function(error, results, fields){
				if(error){
					console.log('MYSQL ERROR:', error)
				} else {


					res.json(results);
				}
			});

			
		},

		get_locations: function(req, res){
			
			console.log('LOCATION MODEL / GET LOCATIONS');

			var query = "SELECT * FROM locations";

			connection.query(query, function(error, results, fields){
				if(error){
					console.log('MYSQL ERROR:', error);
				} else {


					res.json(results);
				}
			});

			
		},

		add_shift: function(req, res){
			console.log('LOCATION MODEL / ADD SHIFT');

			var query = "INSERT INTO shifts (start, end, created_at, updated_at, locations_id) VALUES (?, ?, ?, ?, ?)";

			var now = new Date();

			var values = [req.body.start, req.body.end, now, now, req.body.location.id];
			console.log(req.body.start);
			connection.query(query, values, function(error, results, fields){
				if(error){
					console.log("MYSQL ERROR:", error);
				} else{

					res.json(results);
				}
			})
		}
	}
})();