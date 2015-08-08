var React = require('react');
var axios = require('axios');

module.exports.login = function(email, password) {
  var url = 'http://localhost:3000/api/login';
  var data = {email:email, password:password};

  return axios.post( url, data)
}

module.exports.signup = function(email, password) {
  var url = 'http://localhost:3000/api/signup';
  var data = {email:email, password:password};

  return axios.post( url, data)
}
