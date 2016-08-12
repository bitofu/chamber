var router = require('express').Router();
// var passport = require('passport');
// var User = require('../models/user');

router.use('/signup', require('./signup'));
// router.use('/login', require('./login'));

module.exports = router;
/*
module.exports = function(app, passport) {
  console.log('this is required')

  // create new session
  app.post('/login', function(req, res, next) {
    console.log('someone is logging in aaaaahhhh')
    passport.authenticate('local-login', function(err, user, info) {
      console.log('err: ', err)
      console.log('user: ', user)
      console.log('info: ', info)
    });
    res.send({message: 'nutters'})
  });

  // logout of current session
  app.post('/logout', function(req, res, next){
    console.log('logging out');
    req.logout();
    res.redirect('/');
  });

  // POST create new user
  app.post('/signup', function(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var city = req.body.city;
    var country = req.body.country;

    // passport.authenticate('local-signup', function(err, user, info) {
    //   console.log('err: ', err)
    //   console.log('user: ', user)
    //   console.log('info: ', info)
    // });
    res.send({message: 'nutters'})

  //   User.findOne({ email: email }, function(err, user) {
  //     if (err) return next(err);
  //     if (user) {
  //       return res.status(409).send({ message: user.email + ' is already registered' });
  //     } else {
  //       try {
  //         var user = new User({
  //           email: email,
  //           password: password,
  //           firstName: firstName,
  //           lastName: lastName,
  //           city: city,
  //           country: country
  //         });
  //         user.save(function(err) {
  //           if (err) return next(err);
  //           res.send({ message: 'Registration successful. Welcome to chamber, ' + user.firstName + '!' });
  //         });
  //       } catch (error) {
  //         res.status(404).send({ message: 'An error occured, please try refreshing the page and registering again' })
  //       };
  //     };
  //   });
  });

};
*/


