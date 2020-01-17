const express = require('express');

const app = express();

const sayHello = require('./lib/strings');

app.get('/strings/hello/world', (req, res) => {
  res.status(200);
  res.send({ result: 'Hello, world!' });
  // res.status(200).json({result:'Hello, world!'});
});

app.get('/strings/upper/hello', (req, res) => {
  res.status(200).json({ result: 'HELLO' });
});

module.exports = app;
