var ExerciseTypes = {};
ExerciseTypes['MultipleChoice'] = require('mongoose').model('MultipleChoiceExercise');

exports.addExercise = function(req, res) {
  var teacherID = req.user.id;

}