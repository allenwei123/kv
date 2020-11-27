const Router = require('koa-router')
const {Resolve} = require('../lib/helper');
const {AdminDao} = require('../dao/admin');
const {LoginManager} = require('../service/login');
const {Auth} = require('../../middlewares/auth');

const res = new Resolve();
const AUTH_ADMIN = 16;

const router = new Router({
  prefix: '/api/admin'
})

// 管理员登录
router.post('/login', async (ctx) => {
  const { username } = ctx.request.body
  const result = await LoginManager.adminLogin(username)
  if (result) {
    ctx.body = res.success(result,'登录成功')
  } else {
    ctx.body = res.json(null, '用户不存在')
  }
})

// 管理员注册
router.post('/register', async (ctx) => {
  const { result } = ctx.request.body
  await AdminDao.inner(result)
  ctx.body = res.success(result,'注册成功');
})

// 管理员修改
router.post('/updated', new Auth(AUTH_ADMIN).m, async (ctx) => {
  const { id, name } = ctx.request.body
  await AdminDao.updated(id, name)
  ctx.body = res.success(null,'修改成功');
})


// 管理员
router.get('/getDetailByName', async (ctx) => {
  const {name} = ctx.query
  
  const result = await AdminDao.detail(name)
  ctx.body = res.json(result)
  
})

module.exports = router