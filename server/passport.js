var LocalStrategy   = require('passport-local').Strategy;
var User            = require('./models/user');

module.exports = function(passport) {

  // required for persistent login sessions
  // used to serialize the user for the session
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  // Local Strategy
  passport.use('local-signup', new LocalStrategy({
      // by default, local strategy uses username and password, we will override with email
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback : true // allows us to pass back the entire request to the callback
  },
  function(req, email, password, done) {
    console.log('test3')
   // User.findOne wont fire unless data is sent back
    process.nextTick(function() {
      User.findOne({ 'local.email': email }, function(err, user) {
        // if there are any errors, return the error
        if (err)
          return done(err);
        // check to see if theres already a user with that email
        if (user) {
          return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
        } else {// if there is no user with that email
          // create the user
          var newUser            = new User();
          // set the user's local credentials
          newUser.local.email    = email;
          newUser.generateHash(password, function(hash){
            newUser.local.password = hash;
            // save the user
            newUser.save(function(err) {
              if (err)
                throw err;
              return done(null, newUser);
            });
          });
        }
      });    
    });
  }));
};
