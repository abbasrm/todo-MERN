const express = require('express');
const todo = require('./routes/todo');
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
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
