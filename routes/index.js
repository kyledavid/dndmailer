import express from 'express'
import mongoose from 'mongoose'
const db = mongoose.connect('mongodb://poop:poopman1@ds249583.mlab.com:49583/express-rest')

let router = express.Router()

router.use('/rsvp', (req, res, next) => {
  next()
})
router.route('/rsvp')

router.use('/confirm', (req, res, next) => {
  next()
})
router.route('/confirm')

export default router
