const mysql = require('mysql');

const {
  dbName,
  host,
  port,
  user,
  password
} = require('../config/config').database

const connection = mysql.createConnection({
  host, // mysql host
  user, // mysql 用户名
  port, // mysql 端口
  password, // mysql密码
  database: dbName // mysql 库
})

connection.connect(err => {
  if (err) throw err;
  console.log('mysql connncted success!');
})

module.exports = {
  connection
}