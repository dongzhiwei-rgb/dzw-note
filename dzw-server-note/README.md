# dzw-note-serve

## 安装依赖
```
npm install
```

### node环境下运行服务
```
node serve
```

## mysql数据库
```
配置信息在 database/config.js文件
```

## 实现的接口

- 用户模块
```js
//注册接口
users.post('/register',userController.register)
// 登录接口
users.post('/login',userController.login)
// 修改头像
users.post('/upload',userController.options,userController.changeHeadImage)
// 获取头像
users.get('/getheadeimage',userController.getheadimage)
```

- 任务模块

```js
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
```