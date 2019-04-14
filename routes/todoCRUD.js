const mongoose = require('mongoose');

require('../models/todo');

const Todo = mongoose.model('todo');

module.exports = {
  getAll: async (req, res) => {
    const doneState = Boolean(req.query.done);
    const todoData = await Todo.find({ done: doneState || false });
    if (!todoData) return res.json({ success: false });
    res.json(todoData);
  },

  deleteAll: async (req, res) => {
    if (req.query['delete-all']) {
      await Todo.deleteMany({ done: true });
      return res.json({ success: true });
    }
    res.json({ success: false });
  },

  delete: async (req, res) => {
    const del = await Todo.findByIdAndRemove({ _id: req.params.id });
    console.log(del);
    res.json({ success: true });
  },

  update: async (req, res) => {
    console.log('1111');
    console.log(req.body, req.params.id);
    await Todo.update({ _id: req.params.id }, req.body, err =>
      console.log(err)
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
