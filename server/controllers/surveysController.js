Surveys = require('../models/survey')

pry = require('pryjs')

const index = async ctx => {
  eval(pry.it)
  let campaign_id = ctx.query.campaign
  let surveys = await Surveys.byCampaign(campaign_id)

  if (!surveys[0])
    return ctx.response.status = 404

  ctx.body = surveys
}

module.exports = {
  index
}