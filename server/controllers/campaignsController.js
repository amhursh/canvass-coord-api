const env = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[env]
const db = require('knex')(config)

pry = require('pryjs')

Campaigns = require('../models/campaign')

const index = async ctx => {
  let campaigns = await Campaigns.all()

  if(!campaigns[0])
    return ctx.response.status = 404

  ctx.body = campaigns
}

const create = async ctx => {
  let title = ctx.request.body.campaign.title
  let description = ctx.request.body.campaign.description
  // eval(pry.it)
  if(!title || !description)
    return ctx.response.status = 404

  let campaigns = await Campaigns.addCamp(title, description)

  ctx.response.status = 201
  ctx.body = {
    status: 'success',
    data: campaigns
  }
}

module.exports = {
  index,
  create
}