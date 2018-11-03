import nodemailer from 'nodemailer'
import express from 'express'
import bodyParser from 'body-parser'
require('dotenv').config()

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// rsvp
// overdue
// tarded
// GAME ON!
app.post('/confirm', (req, res) => {
  const names = ['kyle', 'tim', 'neal', 'chris', 'nick']
  const output = `
    <h3>Bros confirmed for today's game...</h3>
    <p>${names.forEach(name => `name`)}</p>
  `

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
    text: output
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    res.render('contact', {msg:'Email has been sent'});
  })
})

app.listen(6000, () => console.log('Mail Server Active'))
