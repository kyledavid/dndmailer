import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const TardyManSchema = new Schema({
  name: String,
  email: String
})

export const RSVPManSchema = new Schema({
  name: String,
  email: String,
  time: Date
})

export const ConfirmedManSchema = new Schema({
  name: String,
  email: String
})

export const GamesOnSchema = new Schema({
  gamesOn: Boolean
})
