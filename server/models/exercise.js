var mongoose = require('mongoose');
var Mixed = mongoose.Schema.Types.Mixed;

var ExerciseSchema = new mongoose.Schema({
  type: String,
  time: Number,
  exercise: mongoose.Schema.Types.Mixed
});

var Exercise = mongoose.model("Exercise", ExerciseSchema);

function createSeedExercise() {
  Exercise.find({}).exec(function(err, collection) {
    if (collection.length === 0) {
      Exercise.create({
        user: "Rick",
        exercise: {"this":{"that": "this"}}
      });
    }
  });
}

createSeedExercise();