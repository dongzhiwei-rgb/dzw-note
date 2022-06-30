//用户管理路由
const express = require('express')
//使用user创建对应路由
const users = express.Router()

const userController = require('../controllers/UserController')


//注册接口
users.post('/register',userController.register)
// 登录接口
users.post('/login',userController.login)
// 修改头像
users.post('/upload',userController.options,userController.changeHeadImage)
// 获取头像
users.get('/getheadeimage',userController.getheadimage)


module.exports = users