var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({
  local: {
    email: { type: String, unique: true },
    password: String
  },
  firstName: String,
  lastName: String,
  city: String,
  country: String
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);