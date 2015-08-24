var mongoose = require('mongoose');
var Exercise = require('mongoose').model('Exercise');
var Lesson = require('mongoose').model('Lesson');

exports.addExercise = function(req, res) {
  console.log("in create exercise handler, here is body: ", req.body);
  var lessonId = req.body.lesson_id;
  console.log("lesson ID = ", lessonId, req.body);
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
  console.log("this is the body", req.body);
  Exercise.findByIdAndUpdate(exerciseId,
      {$set:
        {
         type: req.body.type,
         time: req.body.time,
         exercise: req.body.exercise
        }
      },
  {}, function(err, updatedExercise){
      if (err) {
        err = new Error("There was an error saving your exercise");
        res.status(500).send({reason: err.toString()});
      } else {
        console.log("updated exercise saved: ", updatedExercise);
        res.status(201).json(updatedExercise);
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
