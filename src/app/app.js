const express = require('express');
const morgna = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
// middlesware

// database

// router
app.get('/', (req, res) => {
  res.status(200).json({ message: 'hello' });
});

// handle errors

module.exports = app;
