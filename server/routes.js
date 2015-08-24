var mongoose = require('mongoose');
var passport = require('passport');
var LessonCtrl = require('./controllers/lessonCtrl');
var UserCtrl = require('./controllers/userCtrl');
var ExerciseCtrl = require('./controllers/exerciseCtrl');
var _ = require('lodash');
var auth = require('./auth');

module.exports = function(app) {

  /**
   * LESSON API
   */
  app.get('/api/lessons', auth.requiresApiLogin, LessonCtrl.getAllLessons);
  app.get('/api/lesson/:url', auth.requiresApiLogin, LessonCtrl.getLessonByUrl);
  app.post('/api/lesson/:url', auth.requiresApiLogin, LessonCtrl.createLesson);
  app.put('/api/lesson/:url', auth.requiresApiLogin, LessonCtrl.updateLesson);

  app.post('/api/lesson/:id/exercise_result', auth.requiresApiLogin, LessonCtrl.recordExerciseResult);

  /**
   * USER API
   */
  app.post('/api/signup', passport.authenticate('local-signup'), UserCtrl.signupUser);
  app.post('/api/login', passport.authenticate('local-login'), UserCtrl.loginUser);
  app.get('/api/facebook', passport.authenticate('facebook', {scope: 'email'}))
  app.get('/api/facebook/callback', passport.authenticate('facebook', UserCtrl.loginRedirect))
  app.get('/api/google', passport.authenticate('google-openidconnect',{scope : 'email'}));
  app.get('/api/google/callback', passport.authenticate('google-openidconnect', UserCtrl.loginRedirect));
  app.get('/api/twitter', passport.authenticate('twitter',{scope : 'email'}));
  app.get('/api/twitter/callback', passport.authenticate('twitter', UserCtrl.loginRedirect));

  app.post('/api/logout', UserCtrl.logout);
  app.post('/api/authenticate', UserCtrl.checkAuthentication);
  app.get('/api/user', UserCtrl.getUser);
  app.put('/api/user', auth.requiresApiLogin, UserCtrl.updateUser);

  /**
   * EXERCISE API
   */

  app.post('/api/exercise', auth.requiresApiLogin, ExerciseCtrl.addExercise);
  app.put('/api/exercise/:id', auth.requiresApiLogin, ExerciseCtrl.updateExercise);
  app.delete('/api/exercise/:id', auth.requiresApiLogin, ExerciseCtrl.deleteExercise);



// *** 404 FOR INCORRECT API URLS ***
  app.all('/api/*', function(req, res){
    res.sendStatus(404);
  });

//  *** BASE FROM WHICH INDEX.HTML IS RENDERED ***
  app.get('*', function(req, res){
    res.render('index', {
      bootstrappedUser: _.omit(req.user, "password")
    });
  });
};
