const Router = require('koa-router')
const router = new Router()
const rootController = require('../controllers/rootController')
const BASE_URL = '/'

router.get(`${BASE_URL}`, rootController.index)

module.exports = router