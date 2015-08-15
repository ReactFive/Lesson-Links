var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var AuthStore = require('./AuthStore');
var _ = require('lodash');

var LessonConfigStore = Reflux.createStore({
  listenables: [Actions],

  createLesson: function(lesson){
    var self = this;

    Api.createLesson(lesson)
    .then(function(res){
      console.log("successfully created lesson");
      console.log(lesson);
      self.lesson = res.data;
      self.trigger(self.lesson);
      Actions.getUser();
    }) 
    .catch(function(res){
      console.log("failed to create lesson");
      console.log(res);
    })
  },

  createExercise: function(exercise) {
    exercise.text = exercise.text || "Exercise!";
    this.lesson.exercises.push(exercise);
    this.trigger(this.lesson);
    //Api.updateLesson(this.lesson);
  },

  updateAndTrigger: function(){
    var self = this;
    Api.updateLesson(this.lesson)
    .then(function(res){
      self.lesson = res.data;
      self.trigger(self.lesson);
    });
    //this is an 'optimistic' refresh. We call trigger before we hear back from the server so the user doesn't see any lag. 
    this.trigger(this.lesson);
  },

  /* this is for testing purposes */
  init: function() {
    var self = this;
    setTimeout(function() {
      if(!self.lesson) {
        self.lesson = {
          "_id": {
              "$oid": "55ccb68c274e1b1949373f5b"
          },
          "title": "Syncing Async",
          "lesson_url": "async",
          "video_url": "https://www.youtube.com/watch?v=-wYw0bZZ38Y",
          "teacher": {
              "id": {
                  "$oid": "55cbd41377d0abd441067a7e"
              },
              "name": "Colin Wiley"
          },
          "comments": [],
          "exercises": [],
          "publish": true,
          "created_at": {
              "$date": "2015-08-13T15:23:56.760Z"
          },
          "__v": 0
        }
      }
      self.trigger(self.lesson)
    }, 500);
  }
  /* end testing */

});

module.exports = LessonConfigStore;
