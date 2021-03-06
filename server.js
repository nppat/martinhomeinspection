// Simple express sever

var express = require('express'),
	bodyParser = require('body-parser'),
	nodemailer = require('nodemailer'),
    app = express(),
    path = require('path');

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

// Set up bodyParser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Use Prerender.io for proper search engine indexing
app.use(require('prerender-node').set('prerenderToken', 'rgpPjXALwWc9YgQJvIt4'));

// Require routes
// require('./server/config/routes')(app);

// Listen on port 8000
app.listen(8000, function() {
    console.log("Listening on port 8000");
});
