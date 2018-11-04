import express from 'express'
import mongoose from 'mongoose'
import {rsvpMware, confirmMware} from '../middlewares'
import {TardMan, RSVPMan, ConfirmatingMan} from '../schemas'
import dotenv from 'dotenv'

dotenv.config()
const db = mongoose.connect(`mongodb://${process.env.MONGO_NAME}:${process.env.MONGO_PASS}@ds249583.mlab.com:49583/express-rest`)


let router = express.Router()

router.route('/rsvp')
.post([rsvpMware.checkValues, rsvpMware.checkTime, rsvpMware.checkExisting], (req, res) => {
  // Saves RSVP to db
  // Calls email function that rsvp has been started
  res.status(201).send('Everything\'s cool')
})

router.route('/confirm')
.post([confirmMware.checkValues, confirmMware.checkTime, confirmMware.checkExisting], (req,res) => {
  // Saves confirmation
  // Calls function to check if game threshhold has been reached, will then send email
  res.status(201).send('Everything\'s cool')
})

export default router
