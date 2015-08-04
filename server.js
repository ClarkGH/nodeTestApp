//route
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  // res.send('GET request to the page goes here');
  res.sendFile(__dirname + '/index.html');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});