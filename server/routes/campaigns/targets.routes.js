const Router = require('koa-router')
const router = new Router()
const targetsController = require('../controllers/campaigns/targetsController')
const BASE_URL = '/api/v1/campaigns/:id/targets'

router.get(`${BASE_URL}`, targetsController.index)

module.exports = router