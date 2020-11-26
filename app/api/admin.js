const Router = require('koa-router')
const {Resolve} = require('../lib/helper');
const {AdminDao} = require('../dao/admin');
const {LoginManager} = require('../service/login');

const res = new Resolve();

const router = new Router({
  prefix: '/api/admin'
})

// 管理员登录
router.post('/login', async (ctx) => {
  const { username } = ctx.request.body
  const result = await LoginManager.adminLogin(username)
  console.log('result:', result)
  ctx.body = res.json({
    code: 200,
    msg: '成功',
    result
  });
})

// 管理员注册
router.post('/register', async (ctx) => {
  const { result } = ctx.request.body
  await AdminDao.inner(result)
  ctx.body = res.json({
    code: 200,
    msg: '注册成功'
  });
})

// 管理员修改
router.post('/updated',(ctx, next) => {
  next()
}, async (ctx) => {
  // const { age, name } = ctx.request.body
  const result = await AdminDao.updated(12,'新的名字')
  console.log(result)
  ctx.body = res.json(ctx.request);
})


// 管理员
router.get('/getDetailByName', async (ctx) => {
  const {name} = ctx.query
  
  const result = await AdminDao.detail(name)
  ctx.body = res.json(result)
  
})

module.exports = router