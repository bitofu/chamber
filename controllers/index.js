var router = require('express').Router();
var passport = require('passport');
var User = require('../models/user');

// router.use('/signup', require('./signup'));
// router.use('/login', require('./login'));

// create new session
router.get('/login', function(req, res, next) {
  console.log('someone is logging in aaaaahhhh')
  passport.authenticate('local-login', function() {
    console.log('authenticated')
  });
  res.send({message: 'nutters'})
});

// logout of current session
router.get('/logout', function(req, res, next){
  console.log('logging out');
  req.logout();
  res.redirect('/');
});

// POST create new user
router.post('/signup', function(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var city = req.body.city;
  var country = req.body.country;

  User.findOne({ email: email }, function(err, user) {
    if (err) return next(err);
    if (user) {
      return res.status(409).send({ message: user.email + ' is already registered' });
    } else {
      try {
        var user = new User({
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
          city: city,
          country: country
        });
        user.save(function(err) {
          if (err) return next(err);
          res.send({ message: 'Registration successful. Welcome to chamber, ' + user.firstName + '!' });
        });
      } catch (error) {
        res.status(404).send({ message: 'An error occured, please try refreshing the page and registering again' })
      };
    };
  });
});

module.exports = router;