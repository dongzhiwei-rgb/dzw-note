const express = require('express')
//使用tasks创建对应路由
const tasks = express.Router()
// 日常任务控制层
const DailyTask = require('../controllers/DailyTaskController')
// 计划控制层
const Plans = require('../controllers/PlansController')
// 计划内容控制层
const PlansTask = require('../controllers/PlanTaskController')


// TODO 接口请求（日常任务）
// 获取日常任务
tasks.get('/dailytask/get',DailyTask.getTask)
// 保存日常任务
tasks.post('/dailytask/save',DailyTask.saveAdd)
// 删除日常任务
tasks.post('/dailytask/delete',DailyTask.deleteTask)
// 修改日常任务
tasks.post('/dailytask/modify',DailyTask.modifyTask)
// 标记完成日常任务
tasks.post('/dailytask/finish',DailyTask.finishTask)
// 撤销标记完成 
tasks.post('/dailytask/unfinish',DailyTask.unFinishTask)

//TODO 接口请求（计划任务）
// 获取计划任务
tasks.get('/plan/get',Plans.getPlan)
// 保存计划任务
tasks.post('/plan/save',Plans.savePlan)
// 删除计划任务
tasks.post('/plan/delete',Plans.deletePlan)
// 修改计划任务
tasks.post('/plan/modify',Plans.modifyPlan)
// 标记完成计划任务
tasks.post('/plan/finish',Plans.finishPlan)
// 撤销完成标记
tasks.post('/plan/unfinish',Plans.unFinishPlan)

//TODO 接口请求（计划内容）

module.exports = tasks