const router = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const {checkRegisterUsernameExists, checkLoginUsernameExists, checkPayload} = require('./middleware')
const AuthMw = require('./auth-model')
const {tokenBuilder} = require('./token-builder')

router.post('/register', checkPayload, checkRegisterUsernameExists, async (req, res, next) => {
  const user = req.body
  const rounds = process.env.BCRYPT_ROUNDS || 8
  const hash = bcrypt.hashSync(user.password, rounds )
  user.password = hash

  try{
    const newUser = await AuthMw.add(user)
    res.status(201).json({
      message: `Welcome ${newUser.username}`,
      user_id: newUser.user_id,
      username: newUser.username,
    })
  } catch(err) {
      next(err)
  }
})


router.post('/login', checkPayload, checkLoginUsernameExists, (req, res, next) => {
    const { username, password } = req.body
    if(bcrypt.compareSync(password, req.user.password)) {
        const token = tokenBuilder(req.user)
        res.status(200).json({
            message: `welcome, ${username}`,
            username,
            token
        })
    } else {
        next({
            status: 401,
            message: 'invalid credentials'
        })
    }
})

module.exports = router