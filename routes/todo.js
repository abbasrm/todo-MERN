const express = require('express');
const router = express.Router();

const req = require('./todoCRUD');

// Instant testing code
// const mongoose = require('mongoose');
// require('../models/todo');
// const Todo = mongoose.model('todo');
// End Instant testing code

router
  .route('/')
  .get(req.getAll)
  .post(req.post)
  .delete(req.deleteAll);

router
  .route('/:id')
  .delete(req.delete)
  .put(req.update);

module.exports = router;
