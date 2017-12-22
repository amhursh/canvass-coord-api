const env = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[env]
const db = require('knex')(config)

const all = () => {
  return db.select().table('targets')
  // return db.raw('SELECT * FROM targets')
}

module.exports = {
  all
}