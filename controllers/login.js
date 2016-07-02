var router = require('express').Router();
var passport = require('passport');
var User = require('../models/user');

// POST create new session
router.get('/new_session', function(req, res, next) {
  console.log('someone is logging in aaaaahhhh')
  res.send({message: 'nutters'})
});

module.exports = router;