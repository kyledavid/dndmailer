import express from 'express'
import mongoose from 'mongoose'
import {rsvpMware, confirmMware} from '../middlewares'
import {TardMan, RSVPMan, ConfirmatingMan} from '../schemas'

const db = mongoose.connect('mongodb://poop:poopman1@ds249583.mlab.com:49583/express-rest')

let router = express.Router()

router.route('/rsvp')
.post([rsvpMware.checkValues, rsvpMware.checkTime, rsvpMware.checkExisting], (req, res) => {
  // Saves RSVP to db
  // Calls email function that rsvp has been started
})

router.route('/confirm')
.post([confirmMware.checkValues, confirmMware.checkTime, confirmMware.checkExisting], (req,res) => {
  // Saves confirmation
  // Calls function to check if game threshhold has been reached, will then send email
})

export default router
