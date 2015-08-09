var User = require('mongoose').model('User');
var passport = require('passport');

exports.signupUser = function(req, res) {
    console.log('singup success');
    return res.send(req.user)
    // If this function gets called, authentication was successful.
    // `req.user` property contains the authenticated user.
};

exports.loginUser = function(req, res) {
  console.log('login success');
  return res.send(req.user);
  // If this function gets called, authentication was successful.
  // `req.user` property contains the authenticated user.
};


exports.logout = function(req, res){
    req.logout();
    return res.end();
}