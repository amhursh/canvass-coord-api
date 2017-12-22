const env = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[env]
const db = require('knex')(config)

const index = async ctx => {
  ctx.body = 'CanvassCoord API Service'
}

module.exports = { index }