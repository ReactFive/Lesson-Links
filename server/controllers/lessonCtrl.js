var mongoose = require('mongoose');
var Lesson = require('mongoose').model('Lesson');
var User = require('mongoose').model('User');
var _ = require('lodash')

exports.getAllLessons = function(req, res) {
  Lesson.find({})
  .exec(function (err, collection) {
    if (err) {
      res.status(500);
      return res.send(err);
    } else {
      return res.status(200).json(collection);
    }
  });
};

exports.recordExerciseResult = function(req, res, next) {
  var lessonId = req.params.id;
  var studentId = req.user.id;
  var exerciseId = req.body.exerciseObj._id;
  var result = req.body.result;
  
  Lesson.findById(lessonId, function(err, lesson) {
    var studentEntry;
    for(var i=0; i < lesson.students.length; i++) {
      if(lesson.students[i].id.toString() === req.user.id) {
        studentEntry = lesson.students[i];
      }
    }
    if(studentEntry) {
      // find the entry for the exercise, if there already is one
      var exerciseEntry;
      for(var i=0; i < studentEntry.exerciseResults.length; i++) {
        if(studentEntry.exerciseResults[i].id.toString() === exerciseId) {
          exerciseEntry = studentEntry.exerciseResults[i];
          exerciseEntry.answer = result.answer;
          exerciseEntry.correct = result.correct;
        }
      }

      // create one if there was none
      if(!exerciseEntry) {
        exerciseEntry = {
          id : exerciseId,
          answer : result.answer,
          correct : result.correct
        }
        studentEntry.exerciseResults.push(exerciseEntry);
      }
    }

    lesson.save();
    return res.sendStatus(200);
  })

}

exports.submitTimepoint = function(req, res, next){
  var lesson_url = req.params.url;
  var studentId = req.user.id;
  var timepoint = req.body.time;

  console.log('What is time? ', timepoint)

  Lesson.findOne({'lesson_url':lesson_url})
  .exec(function(err, lesson){
    console.log('lesson is ', lesson)
    for (var i = 0; i < lesson.students.length; i++ ){
      console.log('student Id', studentId, 'lesson id ', lesson.students[i].id.toString())
      if (studentId === lesson.students[i].id.toString()) {
        if (timepoint > lesson.students[i].timeWatched) {
          console.log('Updating time watched')
          lesson.students[i].timeWatched = timepoint;
          lesson.save()
        }
      }
    }
    res.sendStatus(200)
  })

}

exports.getLessonByUrl = function(req, res, next) {
  var lessonUrl = req.params.url;
  Lesson.findOne({'lesson_url':lessonUrl})
  .populate('exercises')
  .exec(function(err, lesson) {
    //Check if lesson exists
    if (!lesson) {
      err = new Error('That lesson does not exist');
      res.status(404);
      return res.send({reason:err.toString()});
    }
    //Check if user has decided to publish lesson
    if (!lesson.publish) {
      return res.status(401).send('Lesson not published')
    }
    if(err) {
      res.status(500);
      return res.send(err);
    //Lesson found and allowed to be published
    } else {
      if (req.user._id.toString() === lesson.teacher.id.toString()) {
        res.status(200).send(lesson);
      } else {
        //Check if it is the first time the student has fetched the lesson
        if(lesson.students) {
          var students = lesson.students
          var index = -1
          for (var i = 0; i < students.length; i++) {
            if (students[i].id.toString() === req.user._id.toString()) {
              index = i;
            }
          }
          if (index === -1) {
            User.findById(req.user._id, function(err, user){
              students.push({
                id : req.user._id,
                name : user.local.name,
                timeWatched : 0
              })
              lesson.save()
            })
          }
        }
        lesson = _.omit(lesson, 'students');
        res.status(200).send(lesson);
      }
    }
  });
};

exports.updateLesson = function(req, res, next){
  Lesson.findOne({'lesson_url':req.params.url})
  .exec(function(err, lesson){
    //Ensure only the teacher can update certain parts of a lesson
    var owner = lesson.teacher.id.toString() === req.user._id.toString()   
    //Only update parts of the lesson supplied in req.body
    if (!owner || !req.body.hasOwnProperty('video_url')) {
      req.body.video_url = lesson.video_url
    }
    if (!owner || !req.body.hasOwnProperty('video_duration')) {
      req.body.video_duration = lesson.video_duration;
    }
    if (!req.body.hasOwnProperty('comments')) {
      req.body.comments = lesson.comments
    }
    if (!owner || !req.body.hasOwnProperty('publish') || lesson.publish) {
      req.body.publish = lesson.publish;
    //Set publish date
    } else {
      Lesson.findOneAndUpdate(
        {'lesson_url':req.params.url}, 
        {published_at : Date.now()},
        {upsert: true, 'new': true}, function(err, res){
          if (err) {console.log(err)}
        }
      )
    }
    Lesson.findOneAndUpdate({'lesson_url' : req.params.url}, {
      $set : 
        {
          video_url : req.body.video_url,
          publish : req.body.publish,
          comments : req.body.comments,
          video_duration : req.body.video_duration
        }
      },{'new': true}, function(err, updatedLesson){
        if (err) {
          console.log(err)
          res.sendStatus(500)
        } else {
        //Sends lesson back if update was successful
        console.log(updatedLesson)
        res.status(200).send(updatedLesson)
        }
      }
    )
  })
}

exports.createLesson = function(req, res, next){
    console.log(req.user)

    var newLesson = new Lesson ({
      title : req.body.title || "Your lesson",
      lesson_url : req.params.url,
      video_url : req.body.video_url || null,
      published : req.body.published || false,
      teacher: {
        id: req.user._id,
        name: req.user.local.name
      }
    });

    newLesson.save(function(err, lesson){
      if(err) {
        if(err.toString().indexOf('E11000') > -1) {
          //lesson_url is the only one required to be unique on the schema, so if we get this E11000 error
          //from mongolabs it's because the submitted lesson url already exists. 
          err = new Error('This lesson url already exists');
          console.log(err);
          res.status(409);
          return res.send({reason:err.toString()});
        } else {
          err = new Error('There was a problem creating your lesson');
          res.status(500);
          return res.send({reason:err.toString()});
        }
      }
      //ADDING THE LESSON ID TO THE USER'S DOCUMENT
      User.findByIdAndUpdate(req.user._id, {
        $addToSet: {
          lessons: lesson._id
        }
      }, {}, function(err, obj) {
        if (err) {
          console.log(500, err);
        } else {
          console.log(obj);
        }
      });
      res.status(201);
      res.json(lesson);
    });
};


exports.addComment = function(req, res, next){

  Lesson.findOneAndUpdate({'lesson_url':req.params.url}, 
    {$push: {comments: req.body}},
    {new: true, upsert: true},
    function(err, lesson) {
      if(err){
        console.log("err:", err);
      }else{
        res.status(200).send(lesson);
      }
    }
  ); 
};

exports.deleteComment = function(req, res, next){

  Lesson.findOneAndUpdate({'lesson_url':req.params.url}, 
    {$pull: {comments: {_id: req.params.id}}},
    {new: true, upsert: true},
    function(err, lesson) {
      if(err){
        console.log("err:", err);
      }else{
        res.status(200).send(lesson);
      }
    }
  ); 
};

exports.addCommentLike = function(req, res, next){

  Lesson.findOne({'lesson_url':req.params.url},
    function(err, lesson) {
      if(err){
        console.log("err:", err);
      }else{
        _.find(lesson.comments, function(com){
          return com._id == req.params.id;
        }).likes.push(req.body.userID);

        lesson.save();
        res.status(200).send(lesson);

      }
    }
  ); 
};

exports.deleteCommentLike = function(req, res, next){

  Lesson.findOne({'lesson_url':req.params.url},
    function(err, lesson) {
      if(err){
        console.log("err:", err);
      }else{
        _.find(lesson.comments, function(com){
          return com._id == req.params.id;
        }).likes.remove(req.params.userID);

        lesson.save();
        res.status(200).send(lesson);
      }
    }
  ); 
};

exports.toggleCommentStar = function(req, res, next){

  Lesson.findOne({'lesson_url':req.params.url},
    function(err, lesson) {
      if(err){
        console.log("err:", err);
      }else{
        _.find(lesson.comments, function(com){
          return com._id == req.params.id;
        }).star = !_.find(lesson.comments, function(com){
          return com._id == req.params.id;
        }).star;

        lesson.save();
        res.status(200).send(lesson);
      }
    }
  ); 

};

exports.addReply = function(req, res, next){

  Lesson.findOne({'lesson_url':req.params.url},
    function(err, lesson) {
      if(err){
        console.log("err:", err);
      }else{

        var oldReplies = _.find(lesson.comments, function(com){
          return com._id == req.params.id;
        }).replies;

        oldReplies.push(req.body);

        lesson.save();
        res.status(200).send(lesson);
      }
    }
  ); 
};

exports.deleteReply = function(req, res, next){

  Lesson.findOne({'lesson_url':req.params.url},
    function(err, lesson) {
      if(err){
        console.log("err:", err);
      }else{

        var oldReplies = _.find(lesson.comments, function(com){
          return com._id == req.params.id;
        }).replies;

        var selectedReply = _.find(oldReplies, function(reply){
          return reply._id == req.params.replyid;
        });

        oldReplies.remove(selectedReply);

        lesson.save();
        res.status(200).send(lesson);
      }
    }
  ); 
};

exports.addReplyLike = function(req, res, next){

  Lesson.findOne({'lesson_url':req.params.url},
    function(err, lesson) {
      if(err){
        console.log("err:", err);
      }else{

        var oldReplies = _.find(lesson.comments, function(com){
          return com._id == req.params.id;
        }).replies;

        var selectedReply = _.find(oldReplies, function(reply){
          return reply._id == req.params.replyid;
        });

        selectedReply.likes.push(req.body.userID);

        lesson.save();
        res.status(200).send(lesson);
      }
    }
  ); 

};

exports.deleteReplyLike = function(req, res, next){

  Lesson.findOne({'lesson_url':req.params.url},
    function(err, lesson) {
      if(err){
        console.log("err:", err);
      }else{

        var oldReplies = _.find(lesson.comments, function(com){
          return com._id == req.params.id;
        }).replies;

        var selectedReply = _.find(oldReplies, function(reply){
          return reply._id == req.params.replyid;
        });

        selectedReply.likes.remove(req.params.userID);

        lesson.save();
        res.status(200).send(lesson);
      }
    }
  ); 

};

exports.toggleReplyStar = function(req, res, next){

  Lesson.findOne({'lesson_url':req.params.url},
    function(err, lesson) {
      if(err){
        console.log("err:", err);
      }else{

        var oldReplies = _.find(lesson.comments, function(com){
          return com._id == req.params.id;
        }).replies;

        var selectedReply = _.find(oldReplies, function(reply){
          return reply._id == req.params.replyid;
        });
        
        selectedReply.star = !selectedReply.star;

        lesson.save();
        res.status(200).send(lesson);
      }
    }
  ); 

};










