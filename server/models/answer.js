const env = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[env]
const db = require('knex')(config)

const addAnswer = (answer, questionId, targetId) => {
  return db('answers')
    .insert({body: answer, question_id: questionId, target_id: targetId})
    .returning('*')
}

const allByTargetAndQuestion = (targetId, questionId) => {
  return db('answers')
    .where({
      target_id: targetId,
      question_id: questionId
    })
}

module.exports = {
  addAnswer
}