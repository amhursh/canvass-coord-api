let pry = require('pryjs')

const Targets = require('../../models/target')

const index = async ctx => {
  let campaignId = ctx.params.id
  let targets = await Targets.byCampaign(campaignId)

  ctx.body = targets
}

module.exports = {
  index
}