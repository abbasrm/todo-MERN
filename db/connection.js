const mongoose = require('mongoose');
const config = require('../config/config');

mongoose.connect(config.mongoURI, { useNewUrlParser: true });

mongoose.connection.on('connected', () => console.log('\x1b[32m', 'DB conneted'));
mongoose.connection.once('open', () => console.log('\x1b[32m', 'DB opened'));
mongoose.connection.on('error', err => console.log('\x1b[31m', `DB error, ${err}`));