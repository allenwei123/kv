const {connection} = require('../../core/db');

class AdminDao {

  // 插入管理员
  static async inner(values) {
   return new Promise((reslove) => {
      const sql = `INSERT INTO person(name,age) VALUES ? `
      connection.query(sql, [values],(err, result) => {
        if (err) throw err;
        reslove(result)
      })
    })
  }
  // 更新管理员
  static async updated(age,name) {
   return new Promise((reslove) => {
    const sql =  `UPDATE person SET name = '${name}' WHERE age = '${age}'`;
      connection.query(sql,(err, result) => {
        if (err) throw err;
        reslove(result)
      })
    })
  }
  // 查询管理员信息
  static async detail(name) {
   return new Promise((reslove) => {
      const sql = `SELECT * FROM person where name="${name}" limit 1`
      connection.query(sql, (err, result) => {
        if (err) throw err;
        reslove(result)
      })
    })
  }
}

module.exports = {
  AdminDao
}
