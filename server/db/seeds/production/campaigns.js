exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('campaigns').del()
    .then(function () {
      // Inserts seed entries
      return knex('campaigns').insert([
        {
          title: 'super cool campaign',
          description: 'awesome',
          created_at: new Date,
          updated_at: new Date
        },
        {
          title: 'not so cool campaign',
          description: 'bummer',
          created_at: new Date,
          updated_at: new Date
        },
        {
          title: 'selling some girl scout cookies',
          description: 'yummy',
          created_at: new Date,
          updated_at: new Date
        }
      ])
    })
}