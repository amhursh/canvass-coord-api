Surveys = require('../models/survey')

pry = require('pryjs')

const index = async ctx => {
  let campaignId = ctx.query.campaign
  let surveys = await Surveys.byCampaign(campaignId)

  if (!surveys[0])
    return ctx.response.status = 404

  ctx.body = surveys
}

module.exports = {
  index
}