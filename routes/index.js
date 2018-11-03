import express from 'express'
import mongoose from 'mongoose'
const db = mongoose.connect('mongodb://poop:poopman1@ds249583.mlab.com:49583/express-rest')

let router = express.Router()

const rsvpMware = {
  checkValues: 'fn that checks if correct values are in req body',
  checkTime: 'fn that checks if its still early enough to create RSVP',
  checkExisting: 'fn to check if there is current RSVP',
}

router.route('/rsvp')
.post([rsvpMware.checkValues, rsvpMware.checkTime, rsvpMware.checkExisting], (req, res) => {
  // Saves RSVP to db
  // Calls email function
})

const confirmMware = {
  checkValues: 'fn that checks if correct values are in req body',
  checkTime: 'fn to check if still before cutoff time',
  checkExisting: 'fn to check if name is currently in the db',
}

router.route('/confirm')
.post([confirmMware.checkValues, confirmMware.checkTime, confirmMware.checkExisting], (req,res) => {
  // Saves RSVP
  // Calls function to check if game threshhold has been reached, will then send email
})

export default router
