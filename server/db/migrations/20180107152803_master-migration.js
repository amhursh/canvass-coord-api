exports.up = function(knex, Promise) {
  return knex.schema.createTable('campaigns', (table) => {
      table.increments('id').primary()
      table.string('title')
      table.string('description')
      table.dateTime('created_at')
      table.dateTime('updated_at')
    })
    .createTable('targets', (table) => {
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
      table.dateTime('created_at')
      table.dateTime('updated_at')
      table.integer('campaign_id').unsigned()
      table.foreign('campaign_id').references('campaigns.id')
      table.boolean('is_visited')
    })
    .createTable('surveys', table => {
      table.increments('id').primary()
      table.string('title')
      table.integer('campaign_id').unsigned()
      table.foreign('campaign_id').references('campaigns.id')
    })
    .createTable('questions', table => {
      table.increments('id').primary()
      table.string('body')
      table.integer('survey_id').unsigned()
      table.foreign('survey_id').references('surveys.id')
    })
    .createTable('answers', table => {
      table.increments('id').primary()
      table.string('body')
      table.integer('question_id').unsigned()
      table.foreign('question_id').references('questions.id')
      table.integer('target_id').unsigned()
      table.foreign('target_id').references('targets.id')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('answers')
    .dropTable('questions')
    .dropTable('surveys')
    .dropTable('targets')
    .dropTable('campaigns')
};
