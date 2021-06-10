const express = require('express');
const path = require('path');
const { sleep } = require('sleep');



const secondsVar = require('./vars.js');

const app = express();
const port = process.env.PORT || 9090;

const seconds = secondsVar.seconds;

app.get('/intense', function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('some arbitrary CPU-intensive task\n');
  sleep(seconds);
});


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});


app.listen(port);
console.log('Server started at http://localhost:' + port);
