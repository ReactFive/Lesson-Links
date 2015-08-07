var mongoose = require('mongoose');
var Lesson = require('./models/lesson')

module.exports = function(config) {

  mongoose.connect(config.database);
  var db = mongoose.connection;
  db.on('error', function () {
    console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
  });
  db.once("open", function callback() {
    console.log("You have connected to the database, dude.");
  });

}
