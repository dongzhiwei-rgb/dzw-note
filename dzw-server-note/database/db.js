const Sequelize = require('sequelize')
const sqlConfig = require("./config")
const db = {}

const seqEntity = new Sequelize(sqlConfig.database,sqlConfig.user,sqlConfig.password,{
    host:sqlConfig.host,
    port:sqlConfig.port,
    dialect:sqlConfig.dialect,
    //配置连接池
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
})

db.seqEntity = seqEntity

module.exports = db

