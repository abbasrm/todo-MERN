const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config');

const mongoose = require('mongoose');
require('../models/user');
const User = mongoose.model('User');

module.exports = {
  // FOR TESTING
  getAllUsers: async (req, res) => {
    const users = await User.find();
    if (!users) return res.status(204).json({ message: 'No users found' });
    res.json(users);
  },

  login: async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user && user.isMatchPassword(req.body.password)) {
      const userData = { ...user._doc };
      delete userData.password;
      delete userData.__v;
      delete userData.created;

      // JWT
      const { _id, email } = userData;
      const token = jwt.sign({ _id, email }, jwtSecret, {
        expiresIn: '1h',
      });
      if (!token)
        return res
          .status(500)
          .json({ message: 'Failed to get a valid token keyF' });
      userData.token = token;
      return res.json(userData);
    }
    res.status(403).json({ message: 'Invalid credentials' });
  },

  isAuthorizated: (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    try {
      const isAuth = jwt.verify(token, jwtSecret);
      // to double check
      isAuth && next();
    } catch {
      res.status(403).json({ message: 'Unauthorizated' });
    }
  },

  singup: async (req, res) => {
    try {
      const newUser = await new User(req.body).save();
      const userData = { ...newUser._doc };
      delete userData.password;
      delete userData.__v;
      delete userData.created;
      res.json(userData);
    } catch (err) {
      res.json({ err });
    }
  },
};
