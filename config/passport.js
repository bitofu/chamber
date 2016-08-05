var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findBy(id, function (err, user) {
      done(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, email, password, done) {
    console.log('employing local-signup')
    process.nextTick(function() {
      User.findOne({'local.email': email}, function(err, user) {
        if (err) return done(err);
        if (user) {
          return done(null, false, res.send({ message: err.message }));
        } else {
          var newUser = new User();
          newUser.local.email = email;
          newUser.local.password = password;

          newUser.save(function(err) {
            if (err) throw err;
            return done(null, newUser);
          });
        };
      });
    });
  }));

  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, email, password, done) {
    console.log('employing local-login')
    process.nextTick(function() {
      User.findOne({'local.email': email}, function(err, user) {
        if (err) return done(err);
        if (!user) return done(null, false, res.send({message: 'No such user found.'}));
        if (!user.validatePassword(password)) return done(null, false, res.send({message: 'Oops! Wrong password.'}));
        return done(null, user);
      });
    });
  }));

};