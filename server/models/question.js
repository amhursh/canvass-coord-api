const env = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[env]
const db = require('knex')(config)

const bySurvey = (surveyId) => {
  return db.select('id', 'body').table('questions').where('survey_id', surveyId)
}

module.exports = {
  bySurvey
}