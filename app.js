const Koa = require('koa')
const InitManager = require('./core/index')
const parser = require('koa-bodyparser')
const koaStatic = require('koa-static')
require('./core/db.js')

const catchError = require('./middlewares/exception')

const app = new Koa()

app.use(koaStatic(__dirname + '/public'))

// 全局拦截catch报错
app.use(catchError)

// 格式化body
app.use(parser())

app.listen(3000, () => {
  console.log('Koa is listening in http://localhost:3000')
})

// 初始化路由、全局变量、全局配置
InitManager.initCore(app)

module.exports = app