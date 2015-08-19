var mongoose = require('mongoose');
var Exercise = require('mongoose').model('Exercise');
var Lesson = require('mongoose').model('Lesson');

exports.addExercise = function(req, res) {

  var lessonId = req.body.lesson_id;
  console.log("lesson ID = ", lessonId)
  var newExercise = new Exercise({
    time: req.body.time,
    type: req.body.type,
    exercise: req.body.exercise
  });

  newExercise.save(function(err, exer){
    if(err) {
      res.status(500).send({error: "unable to save to db"});
      return;
    }
    
    console.log("now in here");
    Lesson.findOneAndUpdate({_id: lessonId}, {
      $addToSet: {
        exercises: exer._id
      }
    }, {}, function(err, obj) {
      console.log("in here");
        if (err) {
          console.log(500, err);
        } else {
          console.log("saved", obj);
        }
      });
    res.status(201);
    res.json(exer);
  });
};

exports.updateExercise = function(req, res){
  var exerciseId = req.params.id;
  console.log(req);
  Exercise.findOne({'_id': exerciseId})
    .exec(function(err, exercise) {
      if (!exercise) {
        err = new Error("That exercise does not exist");
        res.status(404).send({reason: err.toString()});
      }
        console.log(exercise);
      if((typeof req.body.exercise !== 'string') ||
          (req.body.exercise.trim() === '')) {
        err = new Error('No information to update');
        res.status(400);
        return res.send({reason: err.toString()});
      }
      if (err) {
        res.status(500);
        return res.send(err);
      } else {
        console.log(exercise);
        exercise.set({exercise: req.body.exercise});
        exercise.save(function(err, updatedExercise){
          if(err) {
            res.status(500);
          } else {
            res.status(200).json(updatedExercise);
          }
        });
      }
    });
};

exports.deleteExercise = function(req, res){
  var exerciseId = req.params.id;
  Exercise.findOne({'_id': exerciseId})
    .exec(function(err, exercise) {
      if (!exercise){
      err = new Error("That exercise does not exist");
      res.status(404).send({reason: err.toString()});
      } else if (err) {
        res.status(500);
        return res.send(err);
      } else {
        Lesson.update({'exercises': exerciseId},
          {$pull: {'exercises': exerciseId}}, { multi: true},
          function(err, lesson){
            if (err) console.log(err);
            if (lesson) console.log(lesson);
        });
      }
      exercise.remove();
      res.status(200).json(exercise);
    });
};
