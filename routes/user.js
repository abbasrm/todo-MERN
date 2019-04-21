module.exports = router = require('express').Router();

const controller = require('../controllers/user');

// direct testing
// const mongoose = require('mongoose');
// require('../models/user');
// const User = mongoose.model('User');

router.get('/', controller.getAllUsers);

router.post('/', controller.isAuthorizated, controller.singup);

router.post('/login', controller.login);
