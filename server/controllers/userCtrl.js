var User = require('mongoose').model('User');
var passport = require('passport');

exports.signupUser = function(req, res) {
    console.log('singup success');
    return res.status(201).send({user:req.user})
    // If this function gets called, authentication was successful.
    // `req.user` property contains the authenticated user.
};

exports.loginUser = function(req, res) {
  return res.status(200).send({user: req.user});
};


exports.logout = function(req, res){
  req.logout();
  console.log(req.user);
  req.session.destroy(function (err) {
    if (err) { return next(err); }
    // The response should indicate that the user is no longer authenticated.
    return res.send({ authenticated: req.isAuthenticated() });
  });
}