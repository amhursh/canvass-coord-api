const Answers = require('../models/answer')

const pry = require('pryjs')

const create = async ctx => {
  eval(pry.it)
  const answerVal = ctx.request.body.answer
  const questionId = ctx.request.body.questionId
  const targetId = ctx.request.body.targetId

  try {
    const answer = await Answers.addAnswer(answerVal, questionId, targetId)
    if(answer.length) {
      ctx.response.status = 201
      ctx.body = {
        status: 'success',
        data: answer
      }
    } else {
      ctx.status = 404
    }
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  create
}