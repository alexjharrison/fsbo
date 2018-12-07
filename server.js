var express = require('express');
var app = express();
var http = require('http');
var path = require('path');

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api',(req,res)=>{
  console.log('api');
  res.send('api');
});

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
})

var server = app.listen(3000, function() {
   console.log('server running');
});
