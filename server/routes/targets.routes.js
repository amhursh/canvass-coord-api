const Router = require('koa-router')
const router = new Router()
const targetsController = require('../controllers/targetsController')
const BASE_URL = '/api/v1/targets'

router.get(`${BASE_URL}`, targetsController.index)

module.exports = router