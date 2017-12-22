const env = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[env]
const db = require('knex')(config)
pry = require('pryjs')

Targets = require('../models/target')

const index = async ctx => {
  let targets = await Targets.all()
  // eval(pry.it)
  if(!targets[0])
    return ctx.response.status = 404

  ctx.body = targets
}

module.exports = {
  index
}