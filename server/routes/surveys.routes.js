const Router = require('koa-router')
const router = new Router()
const surveysController = require('../controllers/surveysController')
const BASE_URL = '/api/v1/surveys'

router.get(`${BASE_URL}`, surveysController.index)
router.get(`${BASE_URL}/:id/questions`, surveysController.questions)

module.exports = router