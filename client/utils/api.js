var React = require('react');
var axios = require('axios');
var rootUrl = 'http://localhost:3000'

module.exports.login = function(email, password) {
  var url = rootUrl + '/api/login';
  var data = {email:email, password:password};

  return axios.post( url, data)
};

module.exports.signup = function(name, email, password) {
  var url = rootUrl + '/api/signup';
  var data = {name: name, email:email, password:password};

  return axios.post( url, data)
};

module.exports.logout = function(){
  var url  = rootUrl + '/api/logout';
  return axios.post(url);
};

module.exports.getUser = function() {
  var url  = rootUrl + '/api/user';
  return axios.get(url);
};

module.exports.updateLesson = function(lesson) {
  var url  = rootUrl + '/api/lessons/update' + lesson.lesson_url;
  lesson.publish = !lesson.publish
  return axios.post(url, lesson);
};

module.exports.getStatus = function(){
  var url  = rootUrl + '/api/authenticate';
  return axios.post(url);
};

module.exports.getLesson = function(lessonUrl) {
  // need to change this later to '/lesson' to grab a single lesson's data
  var url  = rootUrl + '/api/lesson/'+lessonUrl; 
  return axios.get(url);
};
