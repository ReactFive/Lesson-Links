var User = require('mongoose').model('User');
var passport = require('passport');

exports.signupUser = function(req, res) {
    console.log('singup success');
    req.logIn(user, function(err) {
      if(err) {return next(err);}
      return res.status(201).send({user:req.user});
  });
};

exports.loginUser = function(req, res) {
  return res.status(200).send({user: req.user});
};

exports.addLesson = function(req, res){
  User.findByIdAndUpdate(req.user.id, {
    $addToSet: {
      lessons: req.body.lesson._id
    }, {}, function(err, obj) {
      if (err) {
        console.log(500, err);
      } else {
        console.log(obj);
      }
    });
    res.status(201);
  })
}


exports.logout = function(req, res){
  req.logout();
  console.log(req.user);
  req.session.destroy(function (err) {
    if (err) { return next(err); }
    // The response should indicate that the user is no longer authenticated.
    return res.send({ authenticated: req.isAuthenticated() });
  });
};

exports.checkAuthentication = function(req, res){
    return res.send(req.isAuthenticated());
};