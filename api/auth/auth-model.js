const db = require('../data/db-config')

const add = async user => {
  const [newUserObject] = await db('users').insert(user, ['user', 'username', 'password'])
  return newUserObject
}