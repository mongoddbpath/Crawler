const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const jsonerror = require('koa-json-error')

// 路由
const index = require('./routes/index')
const users = require('./routes/users')
const pm = require('./routes/pm')
// 路由

// 数据库连接
const MongoConnect = require('./db')
MongoConnect()

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))

// 路由校验
app.use(jsonerror())
// error handler
onerror(app)

app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(pm.routes(), pm.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
