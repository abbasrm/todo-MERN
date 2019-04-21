const mongoose = require('mongoose');
const crypto = require('crypto');
const { salt } = require('../config/config')

const Schema = mongoose.Schema;

const userShcema = new Schema({
  name: {
    type: String,
    required: 'Name is required',
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'Email already exist'],
    match: [
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])/,
      'Please Enter a valid Email address',
    ],
  },
  password: {
    type: String,
    min: [4, 'Password should at least be 4 char. length'],
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

// SHOULD be function expression or declation, due to 'this' keyword
userShcema
  .virtual('pass')
  .get(function() {
    return this._password;
  })
  .set(function(pass) {
    this._password = pass;
    this.password = this.encryptPassword(pass);
  });

userShcema.methods = {
  encryptPassword(password) {
    try {
      const hmac = crypto.createHmac('sha256', salt);
      hmac.update(password);
      return hmac.digest('hex');
    } catch (err) {
      console.log(err);
      return;
    }
  },
  isMatchPassword(password) {
    //   console.log(password)
    //   console.log(this.encryptPassword(password))
    //   console.log(this.password)
    return this.encryptPassword(password) === this.password;
  },
};

userShcema.path('password').validate(function() {
  if (!this._password || this._password.length < 4)
    return this.invalidate('Invalid password');
});

module.exports = mongoose.model('User', userShcema);
