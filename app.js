const Koa = require('koa')
const InitManager = require('./core/index')
const parser = require('koa-bodyparser')
const {resolve} = require('path')
const koaStatic = require('koa-static')
require('./core/db.js')

const app = new Koa()

app.use(koaStatic(__dirname + '/public'))
app.use(parser())

app.listen(3000, () => {
  console.log('Koa is listening in http://localhost:3000')
})

InitManager.initCore(app)

module.exports = app