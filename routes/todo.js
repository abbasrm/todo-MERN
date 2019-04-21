const express = require('express');
const router = express.Router();

const req = require('../controllers/todo');

// Instant testing code
// const mongoose = require('mongoose');
// require('../models/todo');
// const Todo = mongoose.model('todo');
// End Instant testing code


// Will save time to get the id from the requests and gives central control on /:id routes
// but will also send one redundant _id on update requests
// If updating the id to the same id is an issue, we can loop through the received props of the req.body and exclude the _id then append the rest
router.param('id', (req, res, next, id) => {
  req.body._id = id;
  next();
});

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
