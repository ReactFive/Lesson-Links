var User = require('mongoose').model('User');
var Lesson = require('mongoose').model('Lesson');
var passport = require('passport');
var _ = require('lodash');

exports.signupUser = function(req, res) {
    console.log('singup success');
    req.logIn(req.user, function(err, user) {
      if(err) {return next(err);}
      user.local = _.omit(user.local, 'password')
      return res.status(201).send({user:user});
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
        res.send({err: "Unauthorized"})
      }
      if (err) {console.log(err)}
      user.lessons = _.filter(user.lessons, function(lesson){return (typeof lesson !== 'string')})
	  user.local = _.omit(user.local, 'password')
      res.status(200)
      res.send({user:user})
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
    })
};

exports.getUser = function(req, res){
  console.log('Getting User')
  console.log('REQ DOT BODDDDDDY', req.user)

  if(req.user) {
    User
    .findById(req.user._id)
    .deepPopulate('lessons.exercises')
    .exec(function(err, user){
      if (err) {console.log(err)}
      user.lessons = _.filter(user.lessons, function(lesson){return (typeof lesson !== 'string')})
      user.local = _.omit(user.local, 'password')

      for (var i = 0; i < user.lessons.length; i++) {
        //Ensures the callback in populate points to the right lesson
        let j=i;

        if (req.user._id.toString() === user.lessons[i].teacher.id.toString()) {
          //If user is the teacher, populates the lesson with any data on students
          user.lessons[j].deepPopulate('students')

        //Waits for the last lesson to be populated before returning the user object
        } else if (j === user.lessons.length-1) {
          res.status(200).send({user:user})
        }
      }

    })
  } else {
    res.sendStatus(401)
  }
};

exports.updateUser = function(req, res){
  console.log('Updating User')
  if(req.user && req.body.addLesson === true){
    Lesson
    .findOne({'lesson_url': req.body.lesson_url})
    .exec(
      function(err, lesson){
      if (lesson === null) {
        res.status(500).send('That lesson does not exist')
      } else {
        User
        .findByIdAndUpdate(req.user._id,
        {$push:{'lessons': lesson._id}},
        {safe:true, upsert: false, new: true},
        function(err, user){
          if (err) {console.log(err)}
          user.local = _.omit(user.local, 'password')
          res.status(200).send(user)       
        })
      }
    })
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
          console.log('test')
          Lesson
          .findByIdAndRemove(req.body._id, function(err, lesson){
            console.log('test2')
          })
        }
        user.local = _.omit(user.local, 'password')
        res.status(200).send(user)       
      })
    })
  }
}

exports.logout = function(req, res){
  console.log('logging out')
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