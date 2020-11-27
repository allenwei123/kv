const { AdminDao } = require('../dao/admin')
const {generateToken} = require('../../core/util')

class LoginManager {
  // 管理员登录
  static async adminLogin(username) {
    // 验证账号密码是否正确
    const [admin] = await AdminDao.detail(username)
    if (admin) {
      return generateToken(admin.userid, 16)
    }
    return null
  }
}

module.exports = {
  LoginManager
}
