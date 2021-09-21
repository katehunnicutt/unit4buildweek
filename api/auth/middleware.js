const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../secrets/index')
const AuthMw = require('./auth-model')

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

const checkPayload = (err, req, res, next) => {
  const {username, password} = req.body
  if(username && password) {
    next()
  } else {
    next({status: 400, message: 'bad request, please provide both username and password'})
  }
}

console.log(checkPayload)

const checkRegisterUsernameExists = async (req, res, next) => {
  const {username} = req.body
  const exists = await AuthMw.findBy(username)
  if(exists) {
    next({status: 422, message: 'username already exists'})
  } else {
    next()
  } 
}

const checkLoginUsernameExists = async (req, res, next) => {
  const {username} = req.body
  const user = await AuthMw.findBy(username)
  if(!user) {
    next({status: 401, message: 'invalid credentials'})
  } else {
    req.user = user
    next()
  }
}


module.exports = {
  restricted,
  checkRegisterUsernameExists,
  checkLoginUsernameExists,
  checkPayload,
}