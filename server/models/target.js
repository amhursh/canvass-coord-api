const env = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[env]
const db = require('knex')(config)

const all = () => {
  return db.select().table('targets')
  // return db.raw('SELECT * FROM targets')
}

const byCampaign = (campaignId) => {
  return db.select().table('targets').where('campaign_id', campaignId)
}

module.exports = {
  all,
  byCampaign
}