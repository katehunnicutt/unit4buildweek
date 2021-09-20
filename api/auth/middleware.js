const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../secrets/index')

const restricted = (err, req, res, next) => {
  const token = req.headers.authorization
  if(!token) {
    return next({status: 401, message: 'token is required'})
  }
  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if(err){
      next({status: 400, message: 'token invalid'})
    } else {
      req.decodedToken = decodedToken
      next()
    }
  })
}

const checkUsernameExists = async (err, req, res, next) => {
  try{
    const [user] = await
  } catch {

  }
}

module.exports = {
  restricted,

}