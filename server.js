// server.js

// modules ===============================================

var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');

// config ================================================

// config files

var db = require('./config/db');

// set port
var port = process.env.PORT || 8080;

// connect to postgresql db here
// (uncomment after adding credentials in config/db)
// do bookshelf stuff here

//get all data (POST) params
//parse application/json
app.use(bodyParser.json());

// parse application/vnd/api+json as json
app.use(bodyParser.json({ type: 'applicaiton/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request.
app.use(methodOverride('X-HTTP-Method-Override'));

//set the static files location /public/img will be /img for users
app.use(express.static(__dirname + 'public'));

// routes ================================================
require('./app/routes')(app); //configure routes

// start app =============================================

// startup app at http://localhost:8080
app.listen(port);

// inform user of the port and server running
console.log("The server is running on port " + port);

// expose app

exports = module.exports = app;