var User = require('mongoose').model('User');
var Lesson = require('mongoose').model('Lesson');
var passport = require('passport');
var _ = require('lodash');

exports.signupUser = function(req, res, next) {
    req.logIn(req.user, function(err) {
      if(err) {console.log('error :', err);}
      return res.sendStatus(201);
  });
};

exports.loginUser = function(req, res) {
  User
  .findById(req.user._id)
  .populate('lessons')
  .exec(
    function(err, user){
      if (!user){
        res.status(401)
        res.send({err: "Unauthorized"});
      }
      if (err) {console.log(err)}
      user.lessons = _.filter(user.lessons, function(lesson){return (typeof lesson !== 'string')});
	    user.local = _.omit(user.local, 'password');
      res.status(200)
      res.send({user:user});
    }
  )
};

exports.loginRedirect = {
successRedirect : '/library',
failureRedirect : '/'
};

exports.addLesson = function(req, res){
  User.findByIdAndUpdate(req.user.id, {
    $addToSet: {
      lessons: req.body.lesson._id
    }}, {}, function(err, obj) {
      if (err) {
        console.log(500, err);
        res.status(500).send();
      }
    res.status(201).send(obj);
    });
};

exports.getUser = function(req, res){
  if(req.user) {
    User
    .findById(req.user._id)
    .deepPopulate('lessons.exercises')
    .exec(function(err, user){
      if (err) {console.log(err)}
      user.lessons = _.filter(user.lessons, function(lesson){return (typeof lesson !== 'string')})
      user.local = _.omit(user.local, 'password')

      //Iterates through each lesson
      for (var i = 0; i < user.lessons.length; i++) {
        //If the user is not the teacher, remove all lesson data that doesn't belong to them
        if (!(req.user._id.toString() === user.lessons[i].teacher.id.toString())) {
          user.lessons[i].students = _.filter(user.lessons[i].students, function(student){
            return (student.id.toString() === req.user._id.toString());
          });
        }
      }
      res.status(200).send({user:user});
    })
  } else {
    res.status(403).send({reason:"user not found"});
  }
};

exports.updateUser = function(req, res){
  if(req.user && req.body.addLesson === true){
    Lesson
    .findOne({'lesson_url': req.body.lesson_url})
    .exec(
      function(err, lesson){
      if (lesson === null) {
        res.status(500).send('That lesson does not exist');
      } else {
        User
        .findByIdAndUpdate(req.user._id,
        {$addToSet :{'lessons': lesson._id}},
        {safe:true, upsert: false, new: true},
        function(err, user){
          if (err) {console.log(err)}
          user.local = _.omit(user.local, 'password');
          res.status(200).send(user);
        });
      }
    });
  } else if (req.user && req.body.unfollowLesson === true) {
    //Removes lesson from user's lesson array
    User
    .findByIdAndUpdate(req.user._id,
    {$pull:{'lessons': req.body._id}},
    function(err, user){
      if (err) {console.log(err)}
      Lesson
      .findById(req.body._id, function(err, lesson){
        //If the owner removes a lesson, the lesson is also deleted.
        if (lesson.teacher.id.toString() === req.user._id.toString()) {
          Lesson
          .findByIdAndRemove(req.body._id, function(err, lesson){
          });
        }
        user.local = _.omit(user.local, 'password');
        res.status(200).send(user) ;
      });
    });
  }
};

exports.logout = function(req, res){
  req.logout();
  req.session.destroy(function (err) {
    if (err) { return next(err); }
    // The response should indicate that the user is no longer authenticated.
    return res.send({ authenticated: req.isAuthenticated() });
  });
};

exports.checkAuthentication = function(req, res){
    return res.send(req.isAuthenticated());
};