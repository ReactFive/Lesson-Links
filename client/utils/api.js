var React = require('react');
var axios = require('axios');
var rootUrl = 'http://localhost:3000';

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
  var url  = rootUrl + '/api/lesson/' + lesson.lesson_url;
  return axios.put(url, lesson);
};

module.exports.finishedLesson = function(lesson) {
  var url  = rootUrl + '/api/lesson/finished' + lesson.lesson_url;
  return axios.put(url, lesson);
}

module.exports.submitExerciseResult = function(lessonId, exerciseObj, result) {
  var url = rootUrl + '/api/lesson/' + lessonId + '/exercise_result';
  var data = {
    exerciseObj : exerciseObj,
    result : result
  }
  return axios.post(url, data);
}

module.exports.createLesson = function(lesson) {
  var url  = rootUrl + '/api/lesson/' + lesson.lesson_url;
  return axios.post(url, lesson);
};

module.exports.addComment = function(lesson, comment){
  var url = rootUrl + '/api/lesson/' + lesson.lesson_url + '/comments';
  return axios.post(url, comment);
}; 

module.exports.deleteComment = function(lesson, commentID){
  var url = rootUrl + '/api/lesson/' + lesson.lesson_url + '/comments/' + commentID;
  return axios.delete(url);
}; 

module.exports.addCommentLike = function(lesson, commentID, user){
  var url = rootUrl + '/api/lesson/' + lesson.lesson_url + '/comments/' + commentID + '/likes';
  return axios.post(url, user);
}; 

module.exports.deleteCommentLike = function(lesson, commentID, user){
  var url = rootUrl + '/api/lesson/' + lesson.lesson_url + '/comments/' + commentID + '/likes/' + user.userID;
  return axios.delete(url);
}; 

module.exports.toggleCommentStar = function(lesson, commentID){
  var url = rootUrl + '/api/lesson/' + lesson.lesson_url + '/comments/' + commentID + '/star';
  return axios.put(url);
}; 

module.exports.addReply = function(lesson, commentID, reply){
  var url = rootUrl + '/api/lesson/' + lesson.lesson_url + '/comments/' + commentID + '/replies';
  return axios.post(url, reply);
}; 

module.exports.deleteReply = function(lesson, commentID, replyID){
  var url = rootUrl + '/api/lesson/' + lesson.lesson_url + '/comments/' + commentID + '/replies/' + replyID;
  return axios.delete(url);
}; 

module.exports.addReplyLike = function(lesson, commentID, replyID, user){
  var url = rootUrl + '/api/lesson/' + lesson.lesson_url + '/comments/' + commentID + '/replies/' + replyID + '/likes';
  return axios.post(url, user);
}; 

module.exports.deleteReplyLike = function(lesson, commentID, replyID, user){
  var url = rootUrl + '/api/lesson/' + lesson.lesson_url + '/comments/' + commentID + '/replies/' + replyID + '/likes/' + user.userID;
  return axios.delete(url);
}; 

module.exports.toggleReplyStar = function(lesson){

}; 

module.exports.createExercise = function(exercise) {
  var url = rootUrl + '/api/exercise';
  return axios.post(url, exercise);
};

module.exports.updateExercise = function(exercise, exercise_id) {
  var url = rootUrl + '/api/exercise/' + exercise_id;
  return axios.put(url, exercise);
};

module.exports.deleteExercise = function(exercise_id) {
  console.log("here is your id");
  var url = rootUrl + '/api/exercise/' + exercise_id;
  return axios.delete(url);
};

module.exports.updateUser = function(result) {
  var url  = rootUrl + '/api/user/';
  var obj = {
    addLesson: result.addLesson,
    unfollowLesson: result.unfollowLesson,
    lesson_url : result.lesson_url,
    _id : result._id
  }
  return axios.put(url, obj);
}

module.exports.getStatus = function(){
  var url  = rootUrl + '/api/authenticate';
  return axios.post(url);
};

module.exports.getLesson = function(lessonUrl) {
  var url  = rootUrl + '/api/lesson/'+lessonUrl;
  return axios.get(url);
};
