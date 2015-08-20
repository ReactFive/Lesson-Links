var Reflux = require('reflux');

module.exports = Reflux.createActions({
  'login':{},
  'authenticate':{},
  'logout':{},
  'signup':{},
  'submitComment':{},
  'submitReply': {asyncResult: true},
  'fetchLesson':{},
  'updateUser':{},
  'deleteComment':{},
  'likeComment':{},
  'unlikeComment':{},
  'starComment':{},
  'likeReply':{},
  'unlikeReply':{},
  'starReply':{},
  'deleteReply':{},
  'createLesson':{},
  'sendLesson':{},
  'getUser': {asyncResult: true},
  'createExercise':{},
  'followLesson':{},
  'togglePublish':{},
  'deleteLesson':{},
  'triggerConfigStore':{},
  'triggerLessonStore':{}
});

