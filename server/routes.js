var mongoose = require('mongoose');
var passport = require('passport');
var LessonCtrl = require('./controllers/lessonCtrl');
var UserCtrl = require('./controllers/userCtrl');

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
  app.post('/api/authenticate', function (req, res) {
    {
      res.send(req.isAuthenticated())
    }
  });
  app.get('/api/user', function (req, res) {});

};