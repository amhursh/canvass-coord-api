const env = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[env]
const db = require('knex')(config)

const addAnswer = (answer, questionId, targetId) => {
  return db('answers')
    .insert({body: answer, question_id: questionId, target_id: targetId})
    .returning('*')
}

module.exports = {
  addAnswer
}