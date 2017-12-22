const env = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[env]
const db = require('knex')(config)

Targets = require('../models/targets')

const index = async ctx => {
  allTargets = Targets.all()
  // ctx.body = {}
}