var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
  city: String,
  country: String
});

module.exports = mongoose.model('User', userSchema);