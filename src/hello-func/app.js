var express = require('express');
var app = express();
var tuc = require('temp-units-conv');

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello World modified!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.get('/temp', function(req, res) {
  res.send({
    'dependencies-test ': tuc.k2c(373.15)
  })
})


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
