var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var AuthStore = require('./AuthStore')
var _ = require('lodash');

var AddLessonStore = Reflux.createStore({
  listenables: [Actions],

  createLesson: function(lesson){
    console.log(Api)
    Api.createLesson(lesson)
    .then(function(res){
      console.log("successfully created lesson");
      console.log(res);
      AuthStore.getUser();
    }) 
    .catch(function(res){
      console.log("failed to create lesson");
      console.log(res);
    })
  },


  /* this is for testing purposes */
  init: function() {
    this.lesson = {
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
      "comments": [
          {
              "author": "Colin Wiley",
              "marked_at": 660.846271,
              "text": "What is a function? Can anyone explain it to me?",
              "_id": {
                  "$oid": "55cce245b049c75b4fe3bd06"
              },
              "replies": [],
              "star": false,
              "likes": []
          }
      ],
      "publish": true,
      "created_at": {
          "$date": "2015-08-13T15:23:56.760Z"
      },
      "__v": 0
    }

    console.log(this.lesson);
    this.trigger(this.lesson);
  }
  /* end testing */

});

module.exports = AddLessonStore;
