const {connection} = require('../../core/db');

// 定义文章模型
class ArticleDao { 
  // 插入文章
  static async create(values) {
    return new Promise((reslove) => {
       const sql = `INSERT INTO article(
        title,
        author,
        content,
        description,
        keyword,
        cover,
        browse,
        created_at
       ) VALUES ? `
       connection.query(sql, [values],(err, result) => {
         if (err) throw err;
         reslove(result)
       })
     })
   }

   static async list(params = {}) {
     return new Promise((reslove) => {
       const { size = 10, current = 1 } = params
       const startPos = (current-1)*size
       const sql = `select * from article limit ${startPos},${size}`
       connection.query(sql,(err, result) => {
        if (err) throw err;
        reslove({ list: result, page: {
          size, current
        }})
      })
     })
   }

   static async del(id) {
    return new Promise((reslove) => {
      const sql = `delete from article where id =${id}`
      connection.query(sql,(err, result) => {
       if (err) throw err;
       reslove(result)
     })
    })
   }

   static async total() {
    return new Promise((reslove) => {
      const sql = `select count(*) from article`
      connection.query(sql,(err, result) => {
       if (err) throw err;
       reslove(result[0]['count(*)'])
     })
    })
   }
}

module.exports = {
  ArticleDao
}