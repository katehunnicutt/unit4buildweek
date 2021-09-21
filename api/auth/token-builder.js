const { JWT_SECRET } = require("../secrets");
const jwt = require('jsonwebtoken')

function tokenBuilder(user) {
  const payload = {
    subject: user.user_id,
    username: user.username
  }

  const options = {
    expiresIn: '1d'
  }

  return jwt.sign(payload, JWT_SECRET, options)
}

module.exports = {tokenBuilder}