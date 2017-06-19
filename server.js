// requires
var express = require ('express');
var app = express();

// globals
var port = 1616;

// uses
app.use (express.static('public'));

// server
app.listen(port, function(){
  console.log('listening on port:', port);
});
