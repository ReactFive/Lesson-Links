var mongoose = require('mongoose');

var multipleChoiceExerciseSchema = new mongoose.Schema({
  type      :
  {
    type      : String,
    required  : true,
    trim      : true
  },
  question  :
  {
    type      : String,
    required  : true,
    trim      : true
  },
  choices   : [{
    text  :
    {
      type    : String,
      trim    : true,
      max     : 180
    },
    feedback :
    {
      type    : String,
      trim    : true,
      max     : 180
    },
    correctness
    {
      type    : Boolean
    },
  }],
  teacher   :
  {
    id        :
    {
      type    : mongoose.Schema.Types.ObjectId,
      ref     : 'User'
    },
    name      : String
  },
  time      :
  {
    type      : Number
  }
})

var Exercise = mongoose.model('MultipleChoiceExercise', multipleChoiceExerciseSchema);