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
    console.log('email: '+email+' | password: '+password)
   // User.findOne wont fire unless data is sent back
    process.nextTick(function() {
      User.findOne({ 'local.email': email }, function(err, user) {
        // if there are any errors, return the error
        if (err){
          console.log(err)
          return done(err);
          // check to see if theres already a user with that email}
        }
        if (user) {
          console.log('email taken')
          return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
        } else {
          // if there is no user with that email
          console.log('creating user')
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

  passport.use('local-login', new LocalStrategy({
    // by default, local strategy uses username and password, we will override with email
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true // allows us to pass back the entire request to the callback
  },
  function(req, email, password, done) { // callback with email and password from our form
    // find a user whose email is the same as the forms email
    // we are checking to see if the user trying to login already exists
    User.findOne({ 'local.email' :  email }, function(err, user) {
      // if there are any errors, return the error before anything else
      if (err)
        return done(err);

      // if no user is found, return the message
      if (!user)
        return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash

      // if the user is found but the password is wrong
      user.validPassword(password, function(valid){
        console.log('this password is '+ valid)
        if(!valid) {
          return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
        } else {
          // all is well, return successful user
          console.log(user)
          return done(null, user);
        }
      })
    });
  }));
};