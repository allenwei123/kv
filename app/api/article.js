const Router = require('koa-router')
const {Resolve} = require('../lib/helper');
const {ArticleDao} = require('../dao/article');
const {Auth} = require('../../middlewares/auth');

const res = new Resolve();
const AUTH_ADMIN = 16;

const router = new Router({
  prefix: '/api/article'
})

// 文章新增
router.post('/create', new Auth(AUTH_ADMIN).m, async (ctx) => {
  const { 
    title,
    author,
    content,
    description,
    keyword,
    cover,
    browse
 } = ctx.request.body
  const data = [
    title,
    author,
    content,
    description,
    keyword,
    cover,
    browse,
    new Date().getTime()
  ]

  await ArticleDao.create([data])
  ctx.body = res.success(null,'创建文章成功');
})

// 文章列表
router.get('/list', new Auth(AUTH_ADMIN).m, async (ctx) => {
  const {list, page} = await ArticleDao.list(ctx.query)
  const total = await ArticleDao.total()
  ctx.body = res.json({
    list, 
    page: {
      ...page,
      total
    }
  },'获取列表成功');
})

// 删除文章
router.post('/delete', new Auth(AUTH_ADMIN).m, async (ctx) => {
  const { 
    id
 } = ctx.request.body
  const result = await ArticleDao.del(id)
  ctx.body = res.json(result,'操作成功');
})

module.exports = router