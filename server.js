// requires
var express = require ('express');
var app = express();
var index = require ('./modules/routes/index');
var messages = require ('./modules/routes/messages');

// globals
var port = 1616;

// uses
app.use (express.static('public'));
app.use ('/', index);
app.use ('/messages', messages);

// server
app.listen(port, function(){
  console.log('listening on port:', port);
});
