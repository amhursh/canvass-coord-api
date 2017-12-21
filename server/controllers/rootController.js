const env = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[env]
const db = require('knex')(config)

const endpoints = {
  root: '/'
}

const index = async ctx => {
  ctx.body = endpoints
}

module.exports = { index }