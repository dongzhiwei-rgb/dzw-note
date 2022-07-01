const DailyTask = require('../model/Daily_task')
//获取日常任务
const getTask = (req, res)=>{
    DailyTask.findAll({
        where: {
            username: req.user.username
        }
    }).then(data =>{
        res.send({"message":'getTask-success',"result":data})
    }).catch(err=>{
        res.send({"message":err})
    })
}

//保存日常任务
const saveAdd = (req, res) =>{
    const task = req.body
    console.log(req.user)
    task.username = req.user.username
    DailyTask.create(task).then(()=>{
        res.status(200).send({'message':'save-success'})
    }).catch( error =>{
        res.send({'message':'save-error','error':error})
    })
}

// 删除日常任务
const deleteTask = (req,res)=>{
    const task = req.body
    console.log(task)
    DailyTask.destroy({
        where:{
            id:task.id,
            username:req.user.username
        }
    }).then(()=>[
        res.status(200).send({"message":"delete-success"})
    ]).catch((err)=>{
        res.send({"message":err})
    })
}

//修改日常任务
const modifyTask = (req,res)=>{
    const task = req.body
    DailyTask.update(task,{
        where:{
            id:task.id,
            username:req.user.username
        }
    }).then(()=>{
        res.status(200).send({"message":"modify-success"})
    }).catch(error =>{
        res.send({"message":error})
    })
}

//完成日常任务标记
const finishTask = (req,res)=>{
    const task = req.body
    DailyTask.update({state:1},{
        where:{
            id:task.id,
            username:req.user.username
        }
    }).then(()=>{
        res.status(200).send({"message":"finish-success"})
    }).catch(error =>{
        res.send({"message":error})
    })
}

//恢复完成的日常任务到未完成中
const unFinishTask = (req,res)=>{
    const task = req.body
    DailyTask.update({state:0},{
        where:{
            id:task.id,
            username:req.user.username
        }
    }).then(()=>{
        res.status(200).send({"message":"unFinish-success"})
    }).catch(error =>{
        res.send({"message":error})
    })
}


module.exports = {
    saveAdd,
    deleteTask,
    modifyTask,
    finishTask,
    unFinishTask,
    getTask
}