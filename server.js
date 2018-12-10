var express = require('express');
var app = express();
var path = require('path');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
require('dotenv').config();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.user,
    pass: process.env.pass
  }
});

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
  console.log('api');
  res.send('api');
});

app.post('/submit-inquiry', (req, res) => {
  var mailOptions = {
    from: process.env.user,
    to: 'RestonLakeHouse@gmail.com',
    subject: 'Message from RestonLakeHouse.com',
    text: `Name: ${req.body.name}\nPhone: ${req.body.phone}\nEmail: ${
      req.body.email
    }\nQuestion: ${req.body.query}`
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    else console.log('Email sent: ' + info.response);
  });
  console.log(req.body);
  res.send('blah');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

var server = app.listen(3000, function() {
  console.log('server running');
});
