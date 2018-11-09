// TODO
// function that purges database of all records at 12:01 PM each day
// function that checks at CO time if there is an unmet RSVP, and sends email alerting users RSVP has failed
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import {TardyManSchema, ConfirmedManSchema, RSVPManSchema} from '../schemas'
const confirmedModel = mongoose.model('confirmedMan', ConfirmedManSchema)
const tardyModel = mongoose.model('tardyMan', TardyManSchema)
const rsvpModel = mongoose.model('rsvpMan', RSVPManSchema)

dotenv.config()
const db = mongoose.connect(`mongodb://${process.env.MONGO_NAME}:${process.env.MONGO_PASS}@ds157493.mlab.com:57493/dnd-mailer`)

confirmedModel.remove({}, () => console.log('Confirmed Men Deleted'))
tardyModel.remove({}, () => console.log('Tardy Men Deleted'))
rsvpModel.remove({}, () => console.log('RSVP\'d Men Deleted'))
