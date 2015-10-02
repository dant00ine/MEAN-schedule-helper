// require express and begin server
var express = require('express');
var app = express();
app.use(express.static('./client'));

//modules to help with the backend flow
var flash = require('flash')
var bodyParser = require('body-parser');
app.use(bodyParser.json());

//express session begin
var expressSession = require('express-session');
app.use(expressSession({secret: '8879a298339f8a358fbaf0768171e49a'}));
app.use(flash());

//Pass ROUTES necessary information
require('./server/config/routes.js')(app);

app.listen(1337, function(){
  console.log('**----- port 1337 -----**');
  console.log('**----- ohso leet -----**');
})
