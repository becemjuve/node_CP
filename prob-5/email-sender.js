// instructions : 
// 1- create a file named email-sender  
// 2- Try to send your self email using this
// (npm install nodemailer)

const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'becem.1897@gmail.com',
      pass: ''
    }
  });

  var mailOptions = {
    from: 'becem.1897@gmail.com',
    to: 'amine.gandouzi@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };  

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });  