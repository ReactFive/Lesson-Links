var mongoose = require('mongoose');
var check = require('./mongooseValidators');
var Exercise = require('./exercise');
var deepPopulate = require('mongoose-deep-populate')(mongoose);

var lessonSchema = new mongoose.Schema ({
  title   :
  {
    type      : String,
    required  : true,
    trim      : true
  },
  lesson_url  :
  {
    type      : String,
    required  : true,
    unique    : true,
    index     : true
  },
  video_url   :
  {
    type      : String,
    validate  : check.urlValidator
  },
  video_duration : 
  {
    type    : Number,
    default : 1
  },
  created_at  :
  {
    type      : Date,
    default   : Date.now,
    required  : true
  },
  publish     :
  { 
    type      : Boolean,
    default   : false
  },
  published_at: 
  {
    type      : Date,
    default   : null
  },
  comments    : [{
    time      :
    {
      type    : Number,
      required: true
    },
    author    : 
    {
      name  : String,
      id    : String
    },
    text      :
    {
      type    : String,
      trim    : true,
      max     : 180
    },
    likes     : 
    {
      type   : Array,
      default : []
    },
    star      : 
    {
      type    : Boolean,
      default : false
    },
    replies   :
    [{
      author    : 
      {
        name  : String,
        id    : String
      },
      text      :
      {
        type    : String,
        trim    : true,
        max     : 180
      },
      likes     : 
      {
        type   : Array,
        default : []
      },
      star      : 
      {
        type    : Boolean,
        default : false
      },
      parent    : String
    }]
  }],
  teacher      :
  {
    id        :
    {
      type    : mongoose.Schema.Types.ObjectId,
      ref     : 'User',
      default : null
    },
    name      : 
    {
      type    : String,
      default : null
    }
  },
  students : [{
    id : {type : mongoose.Schema.Types.ObjectId, ref: 'User'},
    name : String,
    timeWatched : Number,
    exerciseResults : [{
      id : {type : mongoose.Schema.Types.ObjectId, ref: 'Exercise'},
      answer : String,
      correct : Boolean
    }]
  }],
  exercises : [{ type:mongoose.Schema.Types.ObjectId, ref: 'Exercise'}]
});

lessonSchema.virtual('hasComments').get(function(){
  return this.comments.length > 0;
});

lessonSchema.virtual('localDate').get(function(){
  if(this.date) {
    return this.date.toLocaleString();
  }
});

lessonSchema.plugin(deepPopulate);


lessonSchema.post('save', function(){
  console.log("lesson was saved!");
});

lessonSchema.set('toJSON', { getters: true, virtuals: true });
lessonSchema.set('toObject', { getters: true, virtuals: true });

var Lesson = mongoose.model("Lesson", lessonSchema);

function createSeedLesson() {
  Lesson.find({}).exec(function(err, collection) {
    if (collection.length === 0) {
      Lesson.create({
        title: "default lesson",
        lesson_url: "http://localhost:3000/sass-101",
        video_url: "https://www.youtube.com/watch?v=pw1DeLy2Xsw",
        teacher: {
          id: "54ff4ed8476278905d04a1e6",
          name: "Rick"
        },
        comments: [{
          time      : 13.345,
          author    : "Abhi",
          text      : "I didn't really get what you are doing with that for loop?",
          replies   : [{
            author    : "Colin",
            text      : "I feel the same way"
          }]
        }]
      });
    }
  });
}

exports.createSeedLesson = createSeedLesson;