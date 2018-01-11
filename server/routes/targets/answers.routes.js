const Router = require('koa-router')
const router = new Router()
const answersController = require('../../controllers/targets/answersController')
const BASE_URL = '/api/v1/targets'

router.get(`${BASE_URL}/:target_id/questions/:id`, answersController.index)

module.exports = router