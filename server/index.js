var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var compression = require('compression');
//var favicon = require('serve-favicon');
var logger = require('morgan');
//var async = require('async');
var colors = require('colors');
var mongoose = require('mongoose');
//var request = require('request');
var React = require('react');
var Router = require('react-router');
var swig  = require('swig');
var _ = require('lodash');

var env = process.env.NODE_ENV || 'development';
var app = express();

var config = require('./config')[env];

var routes = require('../client/routes.js');
var Lesson = require('./models/lesson');
var LessonCtrl = require('./controllers/lessonCtrl');

//mongo should work now from at mongolab--suggest to change the dev env to your localhost
require('./mongoose')(config);

app.set('port', config.port);
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(express.static(path.join(__dirname, '/../client/')));

/**
 * API points should probably be moved to their own file...
 */
app.get('/api/lessons', LessonCtrl.getAllLessons );

/**
 * Here is where we use React on the server-side, via the react-router
 */

app.use(function(req, res) {
  Router.run(routes, req.path, function(Handler) {
    var html = React.renderToString(React.createElement(Handler));
    var page = swig.renderFile('views/index.html', { html: html });
    res.send(page);
  });
});

app.use(function(err, req, res, next) {
  console.log(err.stack.red);
  res.status(err.status || 500);
  res.send({ message: err.message });
});

// Non-js static files
app.use(express.static('/'))

var server = require('http').createServer(app);

server.listen(app.get('port'), function() {
  console.log('Hey dude, your server is listening on port ' + app.get('port'));
});