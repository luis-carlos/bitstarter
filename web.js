var express = require('express');
var fs = require('fs');
var buffer = fs.readFileSync("index.html");
var msg = buffer.toString();

var app = express.createServer(express.logger());

var infile = "index.html";

app.get('/', function (request, response){
    var html = fs.readFileSync(infile).toString();
    response.send(html);
}); 

app.get('/', function(request, response) {
  response.send(msg);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
