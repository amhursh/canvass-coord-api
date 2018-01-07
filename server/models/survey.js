const env = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[env]
const db = require('knex')(config)

const byCampaign = (campaignId) => {
  return db.select('id', 'title').table('surveys').where('campaign_id', campaignId)
} 

module.exports = {
  byCampaign
}