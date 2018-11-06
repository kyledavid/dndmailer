import nodemailer from 'nodemailer'
import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// rsvp
// overdue
// tarded
// GAME ON!
app.post('/confirm', (req, res) => {
  const names = ['kyle', 'tim', 'neal', 'chris', 'nick']
  const text = names.join(',') + 'are down to game tonight'
  const output = `
    <div style="background-color: aqua; padding: 50px 50px 100px 50px;">
      <div style="background-color: #fff;"">
        <h3 style="font-size: 22px; color: aqua; padding: 20px;">These bros confirmed for today's game...</h3>
        <p style="font-size: 18px; color: #22222a; padding: 20px;">${names.join(',')}</p>
      </div>
    </div>
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

app.listen(6000, () => console.log('Mail Server Active'))
