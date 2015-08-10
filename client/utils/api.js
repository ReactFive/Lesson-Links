var React = require('react');
var axios = require('axios');
var rootUrl = 'http://localhost:3000'

module.exports.login = function(email, password) {
  var url = rootUrl + '/api/login';
  var data = {email:email, password:password};

  return axios.post( url, data)
};

module.exports.signup = function(email, password) {
  var url = rootUrl + '/api/signup';
  var data = {email:email, password:password};

  return axios.post( url, data)
};

module.exports.logout = function(){
  var url  = rootUrl + '/api/logout';
  return axios.post(url);
};

module.exports.getStatus = function(){
  var url  = rootUrl + '/api/authenticate';
  return axios.post(url);
}
