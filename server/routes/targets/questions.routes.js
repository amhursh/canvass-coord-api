const Router = require('koa-router')
const router = new Router()
const questionsController = require('../../controllers/targets/questionsController')
const BASE_URL = '/api/v1/targets'

router.get(`${BASE_URL}/:target_id/questions/:id`, questionsController.index)

module.exports = router