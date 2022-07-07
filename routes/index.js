const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

// try
router.post('/postdata', async (ctx, next) => {
  // let data = ctx.request.body
  let {url,pmword} = ctx.request.body
  // console.dir(data)
  ctx.body = {
    url: url,
    pmword: pmword
  }
})

module.exports = router
