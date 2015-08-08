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
var passport = require('passport')
var flash = require('connect-flash')
var session = require('express-session')
var cookieParser = require('cookie-parser');

var env = process.env.NODE_ENV || 'development';
var app = express();

var config = require('./config')[env];

var routes = require('../client/routes.js');
var Lesson = require('./models/lesson');
var LessonCtrl = require('./controllers/lessonCtrl');

//mongo should work now from at mongolab--suggest to change the dev env to your localhost
require('./mongoose')(config);
require('./passport')(passport)

app.set('port', config.port);
app.use(compression());
app.use(logger('dev'));
app.use(cookieParser()); // read cookies for auth
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(express.static(path.join(__dirname, '/../client/')));

// required for passport
app.use(session({ secret: 'superdupersecretdonttellanyone' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

/**
 * API points should probably be moved to their own file...
 */
app.get('/api/lessons', LessonCtrl.getAllLessons );

app.post('/api/signup', 
  passport.authenticate('local-signup'),
  function(req, res) {
    console.log('singup success')
    res.send(req.user._id)
    // If this function gets called, authentication was successful.
    // `req.user` property contains the authenticated user.
});

app.post('/api/login',
  passport.authenticate('local-login'),
  function(req, res) {
    console.log('login success')
    res.send(req.user._id)
    // If this function gets called, authentication was successful.
    // `req.user` property contains the authenticated user.
});

app.get('/api/logout', function(req, res) {
  req.logout();
  res.end();
});

app.get('/api/authStatus', function(req,res){
  {res.send(req.isAuthenticated())}
})

app.get('/api/user', function(req,res){
  
})

app.get('/api/lesson', function(req,res){
  
})

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