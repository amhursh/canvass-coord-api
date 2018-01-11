const Answer = require('../../models/answer')

const index = async ctx => {
  let targetId = ctx.params.target_id
  let questionId = ctx.params.id

  let answers = await Answer.allByTargetAndQuestion(targetId, questionId)

  ctx.body = answers
}

module.exports = {
  index
}