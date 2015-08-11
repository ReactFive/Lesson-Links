var mongoose = require('mongoose');
var passport = require('passport');
var LessonCtrl = require('./controllers/lessonCtrl');
var UserCtrl = require('./controllers/userCtrl');
var _ = require('lodash');

module.exports = function(app) {

  /**
   * LESSON API
   */
  app.get('/api/lessons', LessonCtrl.getAllLessons);
  app.get('/api/lesson/:url', LessonCtrl.getLessonByUrl);
  app.post('/api/lesson/:url', LessonCtrl.createLesson);

  /**
   * USER API
   */
  app.post('/api/signup', passport.authenticate('local-signup'), UserCtrl.signupUser);
  app.post('/api/login', passport.authenticate('local-login'), UserCtrl.loginUser);
  app.post('/api/logout', UserCtrl.logout);
  app.post('/api/authenticate', UserCtrl.checkAuthentication);
  app.get('/api/user', function (req, res) {});

// *** 404 FOR INCORRECT API URLS ***
  app.all('/api/*', function(req, res){
    res.sendStatus(404);
  });

//  *** BASE FROM WHICH INDEX.HTML IS RENDERED ***
  app.get('/', function(request, response){
    response.render('index', {
      bootstrappedUser: _.omit(req.user, "password")
    });
  });

};