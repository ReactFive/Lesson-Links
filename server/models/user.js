var mongoose = require('mongoose');
var bcrypt   = require('bcrypt');
var Lesson = require('./lesson');
var deepPopulate = require('mongoose-deep-populate')(mongoose);


var userSchema = new mongoose.Schema ({
  local            : {
    email: {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    name: String
  },
  // facebook         : {
  //   id           : String,
  //   token        : String,
  //   email        : String,
  //   name         : String
  // },
  // twitter          : {
  //   id           : String,
  //   token        : String,
  //   displayName  : String,
  //   username     : String
  // },
  // google           : {
  //   id           : String,
  //   token        : String,
  //   email        : String,
  //   name         : String
  // },
  lessons : [{ type:mongoose.Schema.Types.ObjectId, ref: 'Lesson'}]
});

userSchema.methods.generateHash = function(password, callback) {
  bcrypt.hash(password, 10, function(err, res){
    if (err) {console.log(err)}
    callback(res);
  });
};

userSchema.methods.validPassword = function(password, callback) {
  bcrypt.compare(password, this.local.password, function(err, res){
    if (err) {console.log(err)}
      callback(res);
  });
};

userSchema.plugin(deepPopulate);

var User = mongoose.model('User', userSchema);

function createSeedUsers() {
  User.find({}).exec(function(err, users) {
    var hashed_password = bcrypt.hashSync("rickspassword", 10);
    var hashed_password2 = bcrypt.hashSync("test1", 10);
    if (users.length === 0) {
      User.create({local:{ email: "richard.vancamp@gmail.com", password: hashed_password, name:"Rick Van Camp"}});
      User.create({local:{ email: "test1@test1.com", password: hashed_password2, name:"test1"}});
      console.log("new default users created");
    }
  });
}

exports.createSeedUsers = createSeedUsers;