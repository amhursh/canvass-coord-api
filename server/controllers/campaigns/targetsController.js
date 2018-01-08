let pry = require('pryjs')

const Targets = require('../../models/target')

const index = async ctx => {
  eval(pry.it)
  let campaignId = ctx.params.id
  let targets = await Targets.byCampaign(campaignId)

  if (!surveys[0])
    return ctx.response.status = 404

  ctx.body = targets
}

module.exports = {
  index
}