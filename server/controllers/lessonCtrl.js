var Lesson = require('mongoose').model('Lesson');

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
