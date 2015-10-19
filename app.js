var express = require('express');
var app = express();
var config = require('./config');

app.get('/', function(req, res, next){
    res.end('Hello World!!');
});

var server = app.listen(8080, 'localhost', function(){
    console.log("Server starts at http://localhost:8080");
});