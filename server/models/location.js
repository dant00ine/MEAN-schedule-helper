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
					console.log('results:', results)
					console.log('fields:', fields)

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
					console.log('results:', results);
					console.log('fields:', fields);

					res.json(results);
				}
			});

			
		}
	}
})();