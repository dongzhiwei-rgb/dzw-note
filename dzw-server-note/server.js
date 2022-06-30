const express = require('express')
const bodyParser = require('body-parser')
const expressJWT = require('express-jwt')
const cors = require('cors')
//dzw_secret放入环境变量
process.env.SECRET_KEY = "dzw_secret";
const port = process.env.PORT || 8081;
const host = process.env.HOST || '127.0.0.1'

const dzw = express()

// 允许跨域资源共享
dzw.use(cors())

//静态资源文件夹
dzw.use(express.static("public"));

//配置jwt的算法 解析token algorithms: ['HS256'],
dzw.use(expressJWT({secret: process.env.SECRET_KEY,algorithms: ['HS256'] }).unless({ path: [/(login|register)$/]} ))

dzw.use(bodyParser.urlencoded({extended:false}));//解析post
dzw.use(bodyParser.json());//获取JSON数据

const User = require('./routes/UserRouters.js')
const Task = require('./routes/TaskRouters.js')
dzw.use('/user',User)
dzw.use('/task',Task)



//Bearer
dzw.get('/admin/getinfo',(req,res)=>{
    console.log(req.body)
    res.send({
        status:200,
        message:'获取用户信息成功！',
        data:req.user
    })
})


// 错误级别中间件，放最后
dzw.use((err,req,res,next)=>{
    // token解析失败导致的错误
    if(err.name === 'UnauthorizedError'){
        return res.send({
            status:401,
            message:'无效的token'
        })
    }
    // 其它原因导致的错误
    res.send({
        status:500,
        message:'未知错误'
    })
})

dzw.listen(port,host,()=>{
    console.log(`服务器运行中： http://${host}:${port}`)
})

