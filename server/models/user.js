var mongoose = require('mongoose');
var bcrypt   = require('bcrypt');
var lesson = require('./lesson')

var userSchema = new mongoose.Schema ({
  local            : {
    email        : String,
    password     : String,
  },
  facebook         : {
    id           : String,
    token        : String,
    email        : String,
    name         : String
  },
  twitter          : {
    id           : String,
    token        : String,
    displayName  : String,
    username     : String
  },
  google           : {
    id           : String,
    token        : String,
    email        : String,
    name         : String
  },
  lessons : [{ type:mongoose.Schema.Types.ObjectId, ref: 'lesson'}]
});

userSchema.methods.generateHash = function(password, callback) {
  bcrypt.hash(password, 10, function(err, res){
    if (err) {console.log(err)}
    callback(res) 
  });
};

userSchema.methods.validPassword = function(password, callback) {
  bcrypt.compare(password, this.local.password, function(err, res){
    if (err) {console.log(err)}
      callback(res) 
  });
};

module.exports = mongoose.model('User', userSchema);