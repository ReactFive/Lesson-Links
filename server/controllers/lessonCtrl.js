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
  console.log("inside recordExerciseResult");
  //console.log("req.user", req.user);
  //console.log("req.body", req.body);
  var studentId = req.user.id;
  var exerciseId = req.body.exerciseObj._id;
  var result = req.body.result;
  
  Lesson.findById(lessonId, function(err, lesson) {
    var studentEntry;
    for(let i=0; i < lesson.students.length; i++) {
      if(lesson.students[i].id.toString() === req.user.id) {
        studentEntry = lesson.students[i];
        console.log("found student", studentEntry);
      }
    }
    if(studentEntry) {
      // find the entry for the exercise, if there already is one
      var exerciseEntry;
      for(let i=0; i < studentEntry.exerciseResults.length; i++) {
        if(studentEntry.exerciseResults[i].id.toString() === exerciseId) {
          console.log("found exercise");
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

      console.log("exercise entry at end", exerciseEntry);
      console.log("student entry at end", studentEntry);
    }

    lesson.save();
    return res.sendStatus(200);
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
                name : user.local.name
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
    if (!req.body.hasOwnProperty('comments')) {req.body.comments = lesson.comments}
    Lesson.findOneAndUpdate({'lesson_url' : req.params.url}, {
      $set : 
        {
          title : req.body.title,
          video_url : req.body.video_url,
          publish : req.body.publish,
          comments : req.body.comments
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
