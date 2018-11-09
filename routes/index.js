import express from 'express'
import mongoose from 'mongoose'
import {rsvpMware, confirmMware} from '../middlewares'
import {TardyMan, RSVPMan, ConfirmingMan} from '../schemas'
import dotenv from 'dotenv'

dotenv.config()

let router = express.Router()

router.route('/rsvp')
.post([rsvpMware.checkValues, rsvpMware.checkTime, rsvpMware.checkExisting], (req, res) => {
  // Saves RSVP to db
  // Calls email function that rsvp has been started
  res.status(201).send('Everything\'s cool')
})

router.route('/confirm')
.post([confirmMware.checkValues, confirmMware.checkTime, confirmMware.checkExisting, confirmMware.saveToDb], (req,res) => {
  // Saves confirmation
  // Calls function to check if game threshhold has been reached, will then send email
  res.status(201).send('Everything\'s cool')
})

export default router
