//config/passport.js

var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user.js')

module.exports = function(passport){

	//serialize user for the session
	passport.serializeUser(function(user, done){
		done(null, user.id)
	});

	//deserialize user
	passport.deserializeUser(function(id, done){
		User.findOne()
		});


	passport.use('local-signup', new LocalStrategy({
		usernameField : 'email',
		passwordField : 'password',
		passReqToCallback : true
	},
	function(req, email, passowrd, done){

	}
	))

}