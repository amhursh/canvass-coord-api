exports.seed = function(knex, Promise) {
  return knex('targets').del()
    .then( () => {
      return knex('targets').insert([
        { 
          "first_name": "Aaron",
          "last_name": "James",
          "street_number": "25",
          "street_name": "Foxface Circle",
          "unit": null,
          "city": "Englewood",
          "state": "CO",
          "zip": "80112",
          "affiliation": "D",
          "created_at": new Date,
          "updated_at": new Date
        },
        {
          "first_name": "Sara",
          "last_name": "Smith",
          "street_number": "2131",
          "street_name": "Lawrence Street",
          "unit": "123",
          "city": "Denver",
          "state": "CO",
          "zip": "80204",
          "affiliation": "R",
          "created_at": new Date,
          "updated_at": new Date
        }
      ])
    })
}