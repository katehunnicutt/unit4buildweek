exports.seed = function(knex, promise){
  return knex('users').insert([
    {username: 'devusername', password: 'hash soon'},
    {username: 'kait', password: 'hash soon'}
  ])
}