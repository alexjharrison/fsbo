const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.FROM_GMAIL,
    pass: process.env.GMAIL_PASS
  }
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.post('/contact-form', (req, res) => {
  console.log(req.body);
  var mailOptions = {
    from: req.body.email,
    to: process.env.TO_GMAIL,
    subject: 'Message from your website',
    text: `A message was sent from ${req.body.email}\n\nMessage:\n\n${
      req.body.message
    }`
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.send('good');
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
