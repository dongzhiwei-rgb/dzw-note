const Sequelize = require('sequelize')
// 引入db与模型关联
const db = require('../database/db')

// define模型     // users ->模型名字对应表名 
module.exports = db.seqEntity.define('plans',{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
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
        finishtime:{
            type:Sequelize.STRING
        },
        importance:{
            type:Sequelize.INTEGER,
            required:true
        },
        state:{
            type:Sequelize.INTEGER,
            required:true
        }
    },
    {
        timestamps:false, // 不自动条件createAt与updateAt时间戳
        freezeTableName:true, // 不自动修改表名为附属
        tableName:"plans" //指定表名
    }
);