var mongoose = require('mongoose');
var Exercise = require('mongoose').model('Exercise');
var Lesson = require('mongoose').model('Lesson');

exports.addExercise = function(req, res) {

  var lessonId = req.body.lesson_id;

  var newExercise = new Exercise({
    time: req.body.time,
    type: req.body.type,
    exercise: req.body.exercise
  });


newExercise.save(function(err, exer){
  if(err) res.status(500).send({error: "unable to save to db"});

  Lesson.findByIdAndUpdate(lessonId, {
    $addToSet: {
      exercises: exer._id
    }
  }, function(err, obj) {
      if (err) {
        console.log(500, err);
      } else {
        console.log(obj);
      }
    });
  res.status(201);
  res.json(exer);
});
};