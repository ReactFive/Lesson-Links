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

exports.deleteBlog = function(req, res, next) {
  var blogId = req.params.id;
  Blog.findOne({'_id':blogId})
      .exec(function(err, blog) {
        if (!blog) {
          err = new Error('That blog does not exist');
          res.status(404);
          return res.send({reason:err.toString()});
        } else if (err) {
          res.status(500);
          return res.send(err);
        } else if (blog.homeBlog === true) {
          err = new Error("Home blog cannot be deleted");
          res.status(403);
          return res.send({reason: err.toString()});
        } else {
          User.update({'blogs': blogId}, {
                $pull: {'blogs': blogId }}, { multi:true },
              function(err, authors) {
                if(err){
                  console.log(err);
                }
                if (authors) {
                  console.log(authors);
                }
              });
          User.update({'follows': blogId}, {
                $pull: {'follows': blogId }}, { multi:true },
              function(err, obj) {
                if(err){
                  console.log(err);
                }
                if (obj) {
                  console.log(obj);
                }
              });
          User.update({'blogs': blogId}, {
                $pull: {'blogs': blogId }}, { multi:true },
              function(err, obj) {
                if(err){
                  console.log(err);
                }
                if (obj) {
                  console.log(obj);
                }
              });
          Post.update({'blog': blogId}, {
                $pull: {'blog': blogId }}, { multi:true },
              function(err, delBlog) {
                if(err){
                  console.log(err);
                }
                if (delBlog) {
                  console.log(delBlog);
                }
              });
          blog.remove();
          res.status(200).json(blog);
        }
      });
};

exports.updateBlog = function(req, res, next){
  var blogId = req.params.id;
  Blog.findOne({'_id':blogId}, function(err, blog) {
    console.log(blog);
    if (blog && blog.authors.indexOf(req.body.userId) === -1) {
      err = new Error("Not authorized to update Blog");
      res.status(403);
      return res.send({reason: err.toString()});
    }
    if (!blog) {
      err = new Error('That blog does not exist');
      res.status(404);
      return res.send({reason:err.toString()});
    }
    if((typeof req.body.name !== 'string') ||
        (req.body.name.trim() === '')) {
      err = new Error('No information to update');
      res.status(400);
      return res.send({reason:err.toString()});
    } else {
      blog.set({name : req.body.name, slug: req.body.name + "-" + req.user.name});
      blog.save(function(err, blog){
        if(err) {
          res.status(500);
        } else {
          res.status(200).json(blog);
        }
      });
    }
  });
};
