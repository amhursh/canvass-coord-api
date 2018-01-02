const Koa = require('koa')
const rootRoute = require('./routes/root.routes')
const targetsRoutes = require('./routes/targets.routes')
const campaignsRoutes = require('./routes/campaigns.routes')

const app = new Koa()
const PORT = process.env.PORT || 8081

app.use(rootRoute.routes())
app.use(targetsRoutes.routes())
app.use(campaignsRoutes.routes())

if(!module.parent)
  app.listen(PORT).on('error', err => {
    console.error(err)
  })

module.exports = app