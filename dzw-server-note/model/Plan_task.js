const Sequelize = require('sequelize')
// 引入db与模型关联
const db = require('../database/db')

// define模型     // users ->模型名字对应表名 
module.exports = db.seqEntity.define('plan_tasks',{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        plan_id:{
            type:Sequelize.INTEGER,
            autoIncrement:true
        },
        username:{
            type:Sequelize.STRING,
            required:true
        },
        title:{
            type:Sequelize.STRING,
            required:true
        },
        starttime:{
            type:Sequelize.STRING
        },
        content:{
            type:Sequelize.STRING
        },
        state:{
            type:Sequelize.INTEGER,
            required:true
        }
    },
    {
        timestamps:false, // 不自动条件createAt与updateAt时间戳
        freezeTableName:true, // 不自动修改表名为附属
        tableName:"plan_tasks" //指定表名
    }
);