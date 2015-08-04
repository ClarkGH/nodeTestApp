var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log(req);
  res.send('Hi everybody!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Test application is listening at http://%s:%s', host, port);
});