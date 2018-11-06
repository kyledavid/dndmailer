import nodemailer from 'nodemailer'
import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

const playerDeficit = 2;
const port = process.env.PORT || 6000
import {rsvp} from './mail_templates'


const app = express()
dotenv.config()

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
}

app.use(allowCrossDomain)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// rsvp
// overdue
// tarded
// GAME ON!
app.post('/confirm', (req, res) => {
  const names = ['kyle', 'tim', 'neal', 'chris', 'nick']
  const text = names.join(',') + 'are down to game tonight'
  const output = rsvp(names, playerDeficit)
  console.log(process.env.MAIL_NAME + process.env.MAIL_PASS)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_NAME,
      pass: process.env.MAIL_PASS
    }
  })

  const mailOptions = {
    from: 'knwebwork@gmail.com',
    to: 'kyledavid022@gmail.com',
    subject: 'Another User has confirmed',
    text: text,
    html: output
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    res.render('contact', {msg:'Email has been sent'});
  })
  res.status(200).send('Mail Sent')
})

app.listen(port, () => console.log('Mail Server Active'))
