// require express and begin server
var express = require('express');
var app = express();
app.use(express.static('./client'));

//modules to help with the backend flow
var flash = require('flash')
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

//passport and error handling modules
var expressSession = require('express-session');
app.use(expressSession({secret: 'meandand'}));
app.use(flash());

// var passport = require('passport');
// app.use(passport.initialize());
// app.use(passport.session());

//Pass ROUTES necessary information
require('./server/config/routes.js')(app);
// require('./server/config/passport.js')(passport);

//view engine
app.set('view engine', 'ejs');

app.listen(1337, function(){
  console.log('**----- port 1337 -----**');
  console.log('**----- ohso leet -----**');
})
