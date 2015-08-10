var mongoose = require('mongoose');
var Lesson = require('mongoose').model('Lesson');
var User = require('mongoose').model('User');

exports.getAllLessons = function(req, res) {
  Lesson.find({})
  .exec(function (err, collection) {
    console.log("in here");
    if (err) {
      res.status(500);
      return res.send(err);
    } else {
      return res.status(200).json(collection);
    }
  });
};

exports.getLessonByUrl = function(req, res, next) {
  var lessonUrl = req.params.url;
  Lesson.findOne({'lesson_url':lessonUrl})
  .exec(function(err, lesson) {
    if (!lesson) {
      err = new Error('That lesson does not exist');
      res.status(404);
      return res.send({reason:err.toString()});
    }
    if(err) {
      res.status(500);
      return res.send(err);
    } else {
      res.status(200).send(lesson);
    }
  });
};

exports.createLesson = function(req, res, next){
    var teacherID = req.user.id;
    //var teacherID = "55c763f321aa777315bb9728";

    var newLesson = new Lesson ({
      title : req.body.title || "Your lesson",
      lesson_url : req.params.url,
      video_url : req.body.video_url || null,
      published : req.body.published || true,
      teacher: teacherID
    });

    newLesson.save(function(err, lesson){
      if(err) {
        if(err.toString().indexOf('E11000') > -1) {
          err = new Error('This lesson url already exists');
          res.status(409);
          return res.send({reason:err.toString()});
        } else {
          err = new Error('There was a problem creating your lesson');
          res.status(500);
          return res.send({reason:err.toString()});
        }
      }
      //ADDING THE LESSON ID TO THE USER'S DOCUMENT
      User.findByIdAndUpdate(teacherID, {
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
}