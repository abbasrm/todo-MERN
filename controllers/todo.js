const mongoose = require('mongoose');
require('../models/todo');

const Todo = mongoose.model('todo');

module.exports = {
  getAll: async (req, res) => {
    const doneState = Boolean(req.query.done);
    const todoData = await Todo.find({ done: doneState || false }).select(
      '-created -__v'
    );
    if (!todoData)
      return res.status(400).json({ message: 'Failed to fetch data' });
    res.json(todoData);
  },

  deleteAll: async (req, res) => {
    try {
      if (req.query['delete-all']) {
        await Todo.deleteMany({ done: true });
        return res.json({ success: true });
      }
    } catch (error) {
      res.status(400).json({ message: error });
    }
  },

  delete: (req, res) => {
    Todo.findByIdAndRemove(req.body._id, err => {
      if (err) res.status(400).json({ message: err });
      res.status(204).json({});
    });
  },

  update: async (req, res) => {
    await Todo.update(
      { _id: req.body._id },
      req.body,
      err => err && res.status(400).json({ message: err })
    );
    res.json({ success: true });
  },

  post: (req, res) => {
    if (!req.body) {
      return res.json({ success: false, error: 'INVALID INPUT' });
    }
    const newTodo = new Todo(req.body);
    newTodo.save(err => {
      if (err) return res.json({ success: false, error: err });
      res.json(newTodo);
    });
  },
};
