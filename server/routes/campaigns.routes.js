const Router = require('koa-router')
const router = new Router()
const campaignsController = require('../controllers/campaignsController')
const BASE_URL = '/api/v1/campaigns'

router.get(`${BASE_URL}`, campaignsController.index)

module.exports = router