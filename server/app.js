const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const rootRoute = require('./routes/root.routes')
const targetsRoutes = require('./routes/targets.routes')
const campaignsRoutes = require('./routes/campaigns.routes')
const surveysRoutes = require('./routes/surveys.routes')
const campaignTargetsRoutes = require('./routes/campaigns/targets.routes')
const answersRoutes = require('./routes/answers.routes')
const targetQuestionsRoutes = require('./routes/targets/questions.routes')

const app = new Koa()
const PORT = process.env.PORT || 8080

app.use(bodyParser())

app.use(rootRoute.routes())
app.use(targetsRoutes.routes())
app.use(campaignsRoutes.routes())
app.use(surveysRoutes.routes())
app.use(campaignTargetsRoutes.routes())
app.use(answersRoutes.routes())
app.use(targetQuestionsRoutes.routes())

if(!module.parent)
  app.listen(PORT).on('error', err => {
    console.error(err)
  })

module.exports = app