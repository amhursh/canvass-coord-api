const env = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[env]
const db = require('knex')(config)

Campaigns = require('../models/campaign')

const index = async ctx => {
  let campaigns = await Campaigns.all()

  if(!campaigns[0])
    return ctx.response.status = 404

  ctx.body = campaigns
}

module.exports = {
  index
}