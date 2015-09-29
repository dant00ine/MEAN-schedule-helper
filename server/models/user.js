
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'ScribeShifts'
});
 
connection.connect();

module.exports = (function(){
	return {
		create: function(req, res){

			console.log('USER MODEL', req.body)

			var query = "INSERT INTO users (first_name, last_name, email, password, admin, location_id, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)"

			var now = new Date();

			var values = [req.body.first_name, req.body.last_name, req.body.email, '', 0, 1, now, now]

			connection.query(query, values, function(error, results, fields){
				if(error){
					console.log('MYSQL ERROR:', error)
				} else {
					console.log('results:', results)
					console.log('fields:', fields)

					res.json(results);
				}
			});

			connection.end();
		}
	}
})();