exports.seed = function(knex, promise){
  return knex('potlucks').insert([
    {
      user_id: 1, 
      potluck_id: 1, 
      organizing: true, 
      attending: true
    },
    {
      user_id: 2,
      potluck_id: 2,
      organizing: false,
      attending: true,
    }
  ])
}