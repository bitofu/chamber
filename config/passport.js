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
  function(req, done) {
    console.log('employing local-signup')
    process.nextTick(function() {
      User.findOne({'local.email': email}, function(err, user) {
        if (err) return done(err);
        if (user) {
          return res.status(409).send({ message: user.email + ' is already registered' });
        } else {
          try {
            var user = new User({
              email: req.body.email,
              password: req.body.password,
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              city: req.body.city,
              country: req.body.country
            });
            user.save(function(err) {
              if (err) return done(err);
              res.send({ message: 'Registration successful. Welcome to chamber, ' + user.firstName + '!' });
              return done(null, user);
            });
          } catch (error) {
            res.status(404).send({ message: 'An error occured, please try refreshing the page and registering again' })
          };
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
    process.nextTick(function() {
      console.log('employing local-login')
      User.findOne({'local.email': email}, function(err, user) {
        if (err) return done(err);
        if (!user) return done(null, false, res.send({message: 'No such user found.'}));
        if (!user.validatePassword(password)) return done(null, false, res.send({message: 'Oops! Wrong password.'}));
        return done(null, user);
      });
    });
  }));

};