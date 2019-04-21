const express = require('express');
const todo = require('./routes/todo');
const user = require('./routes/user');
const logger = require('morgan');

// DB
require('./db/connection');
require('./models/todo');

const app = express();
const path = require('path');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(express.static('client/build'));

// Routes
app.use('/api/todo', todo);
app.use('/api/user', user);
app.use(['/api/todo', '/api/user'], (req, res, next) => {
  const error = new Error('Route not found');
  error.status = 404;
  next(error);
});
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
app.use((err, req, res, next) =>
  res.status(err.status || 500).json({ message: err.message || 'Error' })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
