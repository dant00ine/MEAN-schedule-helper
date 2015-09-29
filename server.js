// require express so that we can build an express app
var express = require('express');
// require path so that we can use path stuff like path.join
var path = require('path');
// instantiate the app
var app = express();
// set up a static file server that points to the "client" directory
var bodyParser = require('body-parser');
// instantiate the app
var app = express();
app.use(bodyParser.json());

//require the routes file server-side
require('./server/config/routes.js')(app);

app.use(express.static(path.join(__dirname, './client')));
app.listen(8000, function() {
  console.log('running on port: 8000');
});