const router = require('koa-router')()

// 引入mongoose模型
const {Pmtry,Nodes} = require('../models')

router.prefix('/pmtry')

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a pm response'
})

// 排名数据入库
router.post('/add', async function (ctx, next) {
  let data = ctx.request.body
  await Pmtry.insertMany(data).then(rel=>{
      if(rel){
        ctx.body = {
          code:200,
          msg: '添加成功',
          data: rel
        }
      }else{
        ctx.body = {
          code: 422,
          msg: '添加失败'
        }
      }
    }).catch(err=>{
      ctx.body={
        code: 422,
        msg:err
      }
      console.dir(err)
    })
})

// 排名数据查询
router.get('/find', async function (ctx, next) {
  let data = ctx.request.body
  await Pmtry.find(data).then(rel=>{
      if(rel){
        ctx.body = {
          code:200,
          msg: '查询成功',
          data: rel
        }
      }else{
        ctx.body = {
          code: 422,
          msg: '查询失败'
        }
      }
    }).catch(err=>{
      ctx.body={
        code: 422,
        msg:err
      }
      console.dir(err)
    })
})

// 进程初始响应
router.post('/nodesadd', async function (ctx, next) {
  let data = ctx.request.body
  await Nodes.create(data).then(rel=>{
      if(rel){
        ctx.body = {
          code:200,
          msg: '添加成功',
          data: rel
        }
      }else{
        ctx.body = {
          code: 422,
          msg: '添加失败'
        }
      }
    }).catch(err=>{
      ctx.body={
        code: 422,
        msg:err
      }
      console.dir(err)
    })
})

// 进程列表
router.get('/nodesfind', async function (ctx, next) {
  let data = ctx.request.body
  await Nodes.find(data).then(rel=>{
      if(rel){
        ctx.body = {
          code:200,
          msg: '查询成功',
          data: rel
        }
      }else{
        ctx.body = {
          code: 422,
          msg: '查询失败'
        }
      }
    }).catch(err=>{
      ctx.body={
        code: 422,
        msg:err
      }
      console.dir(err)
    })
})

module.exports = router
