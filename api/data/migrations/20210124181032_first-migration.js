exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 200).notNullable()
      users.string('password', 200).notNullable()
      users.timestamps(false, true)
    })
    .createTable('potlucks', (potlucks) => {
      potlucks.increments('potluck_id')
      potlucks.string('potluck_name', 200).notNullable() //name of potluck
      potlucks.time('potluck_time').notNullable()
      potlucks.date('potluck_date').notNullable()
      potlucks.string('potluck_location').notNullable()
    })
    .createTable('food_items', (food_items) => {
      food_items.increments('food_item_id')
      food_items.string('food_item_name', 200).notNullable()
      food_items.integer('user_id')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      food_items.integer('potluck_id')
        .unsigned()
        .notNullable()
        .references('potluck_id')
        .inTable('potlucks')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      })
    .createTable('users_potluck', (users_potluck) => {
      users_potluck.increments('users_potluck_id')
      users_potluck.boolean('organizing').defaultTo(false)
      users_potluck.boolean('attending').defaultTo(false)
      users_potluck.integer('user_id')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      users_potluck.integer('potluck_id')
        .unsigned()
        .notNullable()
        .references('potluck_id')
        .inTable('potlucks')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
}

exports.down = async (knex) => {
  await knex.schema
  .dropTableIfExists('users_potluck')
  .dropTableIfExists('food_items')
  .dropTableIfExists('potlucks')
  .dropTableIfExists('users')
}
