const Router = require('koa-router')
const router = new Router()
const answersController = require('../controllers/answersController')
const BASE_URL = '/api/v1/answers'

router.post(`${BASE_URL}`, answersController.create)

module.exports = router