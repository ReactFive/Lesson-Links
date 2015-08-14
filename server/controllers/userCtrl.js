var User = require('mongoose').model('User');
var passport = require('passport');
var _ = require('lodash');

exports.signupUser = function(req, res) {
    console.log('singup success');
    req.logIn(req.user, function(err) {
      if(err) {return next(err);}
      return res.status(201).send({user:_.omit(req.user, 'local')});
  });
};

exports.loginUser = function(req, res) {
  User
  .findById(req.user._id)
  .populate('lessons')
  .exec(
    function(err, obj){
      if (err) {console.log(err)}
      console.log(obj)
      res.status(200).send({user:obj})
    }
  )
};

exports.addLesson = function(req, res){
  User.findByIdAndUpdate(req.user.id, {
    $addToSet: {
      lessons: req.body.lesson._id
    }, null, function(err, obj) {
      if (err) {
        console.log(500, err);
      } else {
        console.log(obj);
      }
    res.status(201);
    }
  })
}

exports.getUser = function(req, res){
  console.log('Getting User')
  if(req.user) {
    User
    .findById(req.user._id)
    .populate('lessons')
    .exec(
    function(err, obj){
      if (err) {console.log(err)}
      console.log(obj)
      res.status(200).send({user:obj})
    })
  } else {
    res.sendStatus(401)
  }
}

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