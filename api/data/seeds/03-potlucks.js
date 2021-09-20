exports.seed = function(knex, promise){
  return knex('potlucks').insert([
    { potluck_name: 'family reunion', 
      potluck_time: '10:00:00',
      potluck_date:  '09/22/21',
      potluck_location: 'cherry park'
    },
    { potluck_name: 'masons birthday', 
      potluck_time: '04:00:00',
      potluck_date:  '09/30/21',
      potluck_location: 'masons house'
    }

  ])
}