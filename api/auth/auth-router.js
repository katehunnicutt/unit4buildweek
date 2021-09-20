const router = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')



router.post('/register', (req, res, next) => {
  res.send('register')
})


router.post('/login', (req, res, next) => {
  res.send('login')
})
module.exports = {router}