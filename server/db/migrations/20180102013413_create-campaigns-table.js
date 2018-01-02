exports.up = function(knex, Promise) {
  return knex.schema.createTable('campaigns', (table) => {
      table.increments('id').primary()
      table.string('title')
      table.string('description')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('campaigns')
};
