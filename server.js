var express = require('express');
var app = express();
var serve = require('express-static');
var http = require('http');
var path = require('path');

app.use(serve(__dirname  + '/build'))

var server = app.listen(3000, function() {
   console.log('server running');
});
