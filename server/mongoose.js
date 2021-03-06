var mongoose = require('mongoose');
var Lesson = require('./models/lesson');
var UserModel = require('./models/user');
var ExeciseModel = require('./models/exercise');
var User = require('mongoose').model('User');
var Exercise = require('mongoose').model('Exercise');

module.exports = function(config) {

  mongoose.connect(config.database);
  var db = mongoose.connection;
  db.on('error', function () {
    console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
  });
  db.once("open", function callback() {
    console.log("You have connected to the database, dude.");
  });

  // UserModel.createSeedUsers();
  // Lesson.createSeedLesson();
}
