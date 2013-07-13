var express = require('express');
var buffer = new Buffer(64);





var fs = require('fs');
var buffer =fs.readFileSync('index.html');
console.log(buffer);
var output = buffer.toString();
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(output);

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
