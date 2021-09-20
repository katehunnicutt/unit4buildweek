exports.seed = function(knex, promise){
  return knex('potlucks').insert([
    {
      food_item_name: 'mac and cheese', 
      user_id: 1, 
      potluck_id: 1
    },
    {
      food_item_name: 'birthday cake',
      user_id: 2,
      potluck_id: 2,
    }

  ])
}