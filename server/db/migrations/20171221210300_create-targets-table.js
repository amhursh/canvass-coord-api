exports.up = function(knex, Promise) {
  return knex.schema.createTable('targets', (table) => {
      table.increments('id').primary()
      table.string('first_name')
      table.string('last_name')
      table.string('street_number')
      table.string('street_name')
      table.string('unit')
      table.string('city')
      table.string('state')
      table.string('zip')
      table.string('affiliation')
      table.string('create_at')
      table.string('updated_at')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('targets')
};
