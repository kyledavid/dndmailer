export const rsvpMware = {
  checkValues: 'fn that checks if correct values are in req body',
  checkTime: 'fn that checks if its still early enough to create RSVP',
  checkExisting: 'fn to check if there is current RSVP',
}

export const confirmMware = {
  checkValues: 'fn that checks if correct values are in req body',
  checkTime: 'fn to check if still before cutoff time',
  checkExisting: 'fn to check if name is currently in the db',
}
