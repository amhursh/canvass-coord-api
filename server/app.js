const Koa = require('koa')
const rootRoute = require('./routes/root.routes')

const app = new Koa()
const PORT = process.env.PORT || 8081

app.use(rootRoute.routes())

const server = app.listen(PORT).on('error', err => {
  console.error(err)
})

module.exports = server