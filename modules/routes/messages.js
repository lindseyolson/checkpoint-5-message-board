// requires
var express = require ('express');
var router = express.Router();
var bodyParser = require ('body-parser');
var mongoose = require ('mongoose');

// connect to db
mongoose.connect('localhost:27017/messageboard');

// uses
router.use (bodyParser.urlencoded({ extended: true }));
router.use (bodyParser.json());

// schema
var newMessage = new mongoose.Schema({
  name: String,
  message: String
}); // end schema

// property model
var messages = mongoose.model('messages', newMessage);

// POST
router.post ('/', function(req,res){
  console.log('post route hit:', req.body);
  var newRecord = messages(req.body);
  newRecord.save();
  res.sendStatus(201);
}); // end post


// GET
router.get ('/', function (req,res){
  console.log('get route hit');
  messages.find().then(function(data){
    res.send(data);
  });
}); // end get

module.exports = router;
