var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
//var buf = new Buffer(256);
//var outfile = "hello.txt";
//var out = "A startup is a business built to grow rapidly\n";
//fs.writeFileSync(outfile,out);

app.get('/', function(request, response) {
//  response.send('Hello World2!');
var buf = new Buffer(fs.readFileSync('index.html'));
response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
