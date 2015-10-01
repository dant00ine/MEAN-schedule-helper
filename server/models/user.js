
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

			console.log('USER MODEL', req.body)

			var query = "INSERT INTO users (first_name, last_name, email, password, admin, location_id, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"

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
		},

		find: function(req, res){

			console.log('in find method of user model')
			var query = "SELECT * FROM users WHERE email = ?"

			var values = [req.body.email]

			connection.query(query, values, function(error, results, fields){
				if(error){
					console.log('MYSQL ERROR:', error)
				} else {
					
					if(results[0].admin == 1){
						console.log(results[0])
						res.json({admin: true, id: results[0].id})
					} else {
						res.json({admin: false, id: results[0].id})
					}
				}
			})
		},

		editPW: function(req, res){

			var query = "UPDATE users SET password = ? WHERE id = ?"

			var values = [req.body.new_pw, req.params.id]

			console.log('values in login model:', values)

			
		}
	}
})();