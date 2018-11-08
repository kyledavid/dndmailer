import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

import {TardManSchema, ConfirmedManSchema, RSVPManSchema} from '../schemas'
const db = mongoose.connect(`mongodb://${process.env.MONGO_NAME}:${process.env.MONGO_PASS}@ds157493.mlab.com:57493/dnd-mailer`)

export const rsvpMware = {
  checkValues: (req, res, next) => next(), // 'fn that checks if correct values are in req body',
  checkTime: (req, res, next) => next(), // 'fn that checks if its still early enough to create RSVP',
  checkExisting: (req, res, next) => next(), // 'fn to check if there is current RSVP',
}

export const confirmMware = {
  checkValues: (req, res, next) => next(), // 'fn that checks if correct values are in req body',
  checkTime: (req, res, next) => next(), // 'fn to check if still before cutoff time',
  checkExisting: (req, res, next) => next(), // 'fn to check if name is currently in the db',
  saveToDb: (req, res, next) => {
    const confirmedModel = mongoose.model('confirmedMan', ConfirmedManSchema)
    const confirmedMan = new confirmedModel({
      name: req.body.name,
      email: req.body.email
    })
    confirmedMan.save((err, confirmedMan) => {
      if(err) {
        console.log(err)
      } else {
        console.log('A Man was Confirmed')
      }
    })
    next()
  }
}
