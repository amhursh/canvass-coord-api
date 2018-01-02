const env = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[env]
const db = require('knex')(config)

const all = () => {
  return db.select().table('campaigns')
}

const addCamp = (ti, descrip) => {
  return db('campaigns')
    .insert({title: ti, description: descrip, created_at: new Date, updated_at: new Date})
}

module.exports = {
  all,
  addCamp
}