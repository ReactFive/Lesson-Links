var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-openidconnect').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var LocalStrategy   = require('passport-local').Strategy;
var User            = require('mongoose').model('User');
var _               = require('lodash');
var api             = require('./api.js');

module.exports = function(passport) {

  // required for persistent login sessions
  // used to serialize the user for the session
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    User.findById(id)
        .populate('lessons')
        .exec(function(err, user) {
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
    console.log(req.body.name)
    console.log('email: '+email+' | password: '+password)
   // User.findOne wont fire unless data is sent back
    process.nextTick(function() {
      User.findOne({ 'local.email': email }, function(err, user) {
        // if there are any errors, return the error
        if (err){
          console.log(err)
          return done(err);
          // check to see if there is already a user with that email}
        }
        if (user) {
          console.log('email taken')
          return done(null, false);
        } else {
          // if there is no user with that email
          console.log('creating user')
          // create the user
          var newUser            = new User();
          // set the user's local credentials
          newUser.local.email    = email;
          newUser.local.name = req.body.name || undefined;
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
    User.findOne({ 'local.email' :  email })
        .populate('lessons')
        .exec(function(err, user) {
      // if there are any errors, return the error before anything else
      if (err)
        return done(err);
      // if no user is found, return the message
      if (!user)
        return done(null, false); // req.flash is the way to set

      // if the user is found but the password is wrong
      user.validPassword(password, function(valid){
        console.log('this password is '+ valid)
        if(!valid) {
          return done(null, false); // create the loginMessage
          // and save it to session as flashdata
        } else {
          // all is well, return successful user
          var newUser = _.omit(user, "password");
          return done(null, newUser);
        }
      })
    });
  }));

  passport.use(new FacebookStrategy({
    // pull in our app id and secret from our auth.js file
    clientID        : api.facebookAuth.clientID,
    clientSecret    : api.facebookAuth.clientSecret,
    callbackURL     : api.facebookAuth.callbackURL,
    passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
  },

  // facebook will send back the token and profile
  function(req, token, refreshToken, profile, done) {
    // asynchronous
    process.nextTick(function() {
      if(!req.user) {
        // find the user in the database based on their facebook id
        User.findOne({ 'facebook.id' : profile.id }, function(err, user) {
        // if there is an error, stop everything and return that
          if (err){
            return done(err);
          }
          // if the user is found, then log them in
          if (user) {
            return done(null, user); // user found, return that user
          } else {
            // if there is no user found with that facebook id, create them
            var newUser            = new User();

            // set all of the facebook information in our user model
            newUser.local.name     = profile.name.givenName + ' ' + profile.name.familyName;
            newUser.facebook.id    = profile.id; // set the users facebook id                   
            newUser.facebook.token = token; // we will save the token that facebook provides to the user                    
            newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
            newUser.facebook.email = profile.email; // facebook can return multiple emails so we'll take the first

            // save our user to the database
            newUser.save(function(err) {
              if (err){
                throw err;
              }
              // if successful, return the new user
              return done(null, newUser);
            });
          }
        })
      //Add Facebook Credentials to an existing user
      } else {
        var user            = req.user;
        user.facebook.id    = profile.id;
        user.facebook.token = token;
        user.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName;
        user.facebook.email = profile.email;

        user.save(function(err) {
          if (err)
            throw err;
          return done(null, user);
        });
      }
    })
  }));

  passport.use(new GoogleStrategy({
    clientID: api.googleAuth.clientID,
    clientSecret: api.googleAuth.clientSecret,
    callbackURL: api.googleAuth.callbackURL,
    passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
  },
    // User.findOne won't fire until we have all our data back from Google
    function(req, iss, sub, profile, accessToken, refreshToken, done) {
      // try to find the user based on their google id
      process.nextTick(function() {
        if(!req.user) {
          User.findOne({'google.id': profile.id}, function(err, user) {
            if (err) {
              return done(err);
            }
            // if a user is found, log them in
            if (user) {

              // if there is a user id already but no token (user was linked at one point and then removed)
              // just add our token and profile information
              if (!user.google.token) {
                user.google.token = token;
                user.google.name  = profile.displayName;
                user.google.email = profile.email;

                user.save(function(err) {
                  if (err)
                    throw err;
                  return done(null, user);
                });
              }
              return done(null, user); // user found, return that user
            } else {
              // if the user isnt in our database, create a new user
              var newUser          = new User();
              console.log(profile)

              // set all of the relevant information
              newUser.local.name = profile.displayName;
              newUser.google.id    = profile.id;
              newUser.google.token = accessToken;
              newUser.google.name  = profile.displayName;
              newUser.google.email = profile.email

              console.log(newUser)
              // save the user
              newUser.save(function(err) {
                if (err) {
                  console.log(err);
                } else {
                  console.log('successful google')
                }
                return done(null, user);
              });
            }
          })
        } else {
          //User already exists and is logged in
          var user            = req.user;

          // update the current users facebook credentials
          user.google.id    = profile.id;
          user.google.token = accessToken;
          user.google.name  = profile.displayName;
          user.google.email = profile.email
          // save the user
          user.save(function(err) {
            if (err)
              throw err;
            return done(null, user);
          });
        }
      })
    }
  ));
  passport.use(new TwitterStrategy({
    consumerKey: api.twitterAuth.consumerKey,
    consumerSecret: api.twitterAuth.consumerSecret,
    callbackURL: api.twitterAuth.callbackURL,
    passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
  },
    // User.findOne won't fire until we have all our data back from Google
    function(req, token, tokenSecret, profile, done) {
      // try to find the user based on their google id
      process.nextTick(function() {
        if(!req.user) {
          User.findOne({'twitter.id': profile.id}, function(err, user) {
            if (err) {
              return done(err);
            }
            // if a user is found, log them in
            if (user) {
              // if there is a user id already but no token (user was linked at one point and then removed)
              // just add our token and profile information
              if (!user.twitter.token) {
                user.twitter.id    = profile.id;
                user.twitter.token = token;
                user.twitter.username = profile.username;
                user.twitter.name  = profile.displayName;

                user.save(function(err) {
                  if (err)
                    throw err;
                  return done(null, user);
                });
              }
              return done(null, user); // user found, return that user
            } else {
              // if the user isnt in our database, create a new user
              var newUser          = new User();

              // set all of the relevant information
              newUser.local.name = profile.displayName;
              newUser.twitter.id    = profile.id;
              newUser.twitter.token = token;
              newUser.twitter.name  = profile.displayName;

              console.log(newUser)
              // save the user
              newUser.save(function(err) {
                if (err) {
                  console.log(err);
                } else {
                  console.log('successful google')
                }
                return done(null, user);
              });
            }
          })
        } else {
          //User already exists and is logged in
          var user            = req.user;

          // update the current users facebook credentials
          user.google.id    = profile.id;
          user.google.token = accessToken;
          user.google.name  = profile.displayName;
          user.google.email = profile.email
          // save the user
          user.save(function(err) {
            if (err)
              throw err;
            return done(null, user);
          });
        }
      })
    }
  ));
};
