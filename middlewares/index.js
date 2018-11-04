export const rsvpMware = {
  checkValues: (req, res, next) => next(), // 'fn that checks if correct values are in req body',
  checkTime: (req, res, next) => next(), // 'fn that checks if its still early enough to create RSVP',
  checkExisting: (req, res, next) => next(), // 'fn to check if there is current RSVP',
}

export const confirmMware = {
  checkValues: (req, res, next) => next(), // 'fn that checks if correct values are in req body',
  checkTime: (req, res, next) => next(), // 'fn to check if still before cutoff time',
  checkExisting: (req, res, next) => next(), // 'fn to check if name is currently in the db',
}
