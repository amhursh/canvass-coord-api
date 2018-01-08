const Surveys = require('../models/survey')
const Questions = require('../models/question')

pry = require('pryjs')

const index = async ctx => {
  let campaignId = ctx.query.campaign
  let surveys = await Surveys.byCampaign(campaignId)

  ctx.body = surveys
}

const questions = async ctx => {
  let surveyId = ctx.params.id
  let questions = await Questions.bySurvey(surveyId)

  if (!questions[0])
    return ctx.response.status = 404

  ctx.body = questions
}

module.exports = {
  index,
  questions
}