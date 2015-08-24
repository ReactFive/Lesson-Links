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

exports.finishedLesson = function(req, res, next) {
  var lessonUrl = req.params.url;
  Lesson.findOne({'lesson_url':lessonUrl})
  .exec(function(err, lesson){
    if(lesson.finished.indexOf(req.user._id) === -1){
      lesson.finished.push(req.user._id)
      lesson.save()
    }
  })
  res.sendStatus(200)
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
      console.log('req :', req.user._id, 'teacher :', lesson.teacher.id)
      console.log(req.user._id.toString() === lesson.teacher.id.toString())
      if (req.user._id.toString() === lesson.teacher.id.toString()) {
        // Lesson.findOne({'lesson_url':lessonUrl})
        // .populate('studentData.started')
        // .deepPopulate('studentData.finished')
        
        Lesson.populate(lesson, {
          path: 'studentData.started',
          select:'local.name',
          model: User}, function(err, lesson){
            Lesson.populate(lesson, {
              path: 'studentData.finished',
              select:'local.name',
              model: User
            }, function(err, lesson){
              console.log(lesson)
              res.status(200).send(lesson);
            }
            )
          }
        )
      } else {
        //Check if it is the first time the student has fetched the lesson
        if(lesson.studentData && lesson.studentData.started.indexOf(req.user._id) === -1){
          console.log('test5')
          lesson.studentData.started.push(req.user._id)
          lesson.save()
        }
        lesson = _.omit(lesson, 'studentData')
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