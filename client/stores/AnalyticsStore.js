var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var _ = require('lodash');
var AuthStore = require('./AuthStore')

    // return lesson = {
    //   "_id": {
    //       "$oid": "55dca3420d31ba931849e5a9"
    //   },
    //   "title": "Metal Gear?",
    //   "lesson_url": "mgs",
    //   "video_url": "https://www.youtube.com/watch?v=alxN1i1GagM",
    //   "exercises": [
    //       {
    //           "$oid": "55dca36d0d31ba931849e5aa"
    //       },
    //       {
    //           "$oid": "55dca3a10d31ba931849e5ab"
    //       }
    //   ],
    //   "students": [
    //       {
    //           "id": {
    //               "$oid": "55db33073998424d089ae119"
    //           },
    //           "name": "test5",
    //           "timeWatched": 64.030179,
    //           "_id": {
    //               "$oid": "55dca3c30d31ba931849e5ac"
    //           },
    //           "exerciseResults": []
    //       }
    //   ],
    //   "teacher": {
    //       "name": "Colin Wiley",
    //       "id": {
    //           "$oid": "55d52416d18d7259a58b405a"
    //       }
    //   },
    //   "comments": [],
    //   "published_at": {
    //       "$date": "2015-08-25T17:19:32.673Z"
    //   },
    //   "publish": true,
    //   "created_at": {
    //       "$date": "2015-08-25T17:17:54.685Z"
    //   },
    //   "__v": 1
    // }

module.exports = Reflux.createStore({
  listenables: [Actions],

  onFormatLesson : function(lesson){
    var result = [
      {x:'20', y:0},
      {x:'40', y:0},
      {x:'60', y:0},
      {x:'80', y:0},
      {x:'100', y:0},
    ];
    var length = 360;
    for (var i = 0; i < lesson.students.length; i++ ){
      time = lesson.students[i].timeWatched;
      if (time/length < length/5) {result[0][y]++}
      else if (time/length > 1*length/5 && time/length < 2*length/5) {result[1][y]++}   
      else if (time/length > 2*length/5 && time/length < 3*length/5) {result[2][y]++}   
      else if (time/length > 3*length/5 && time/length < 4*length/5) {result[3][y]++}   
      else if (time/length > 4*length/5) {result[4][y]++}   
    }
  }
})