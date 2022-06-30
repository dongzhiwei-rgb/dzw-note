const Plans = require('../model/Plan')

// 获取计划
const getPlan = (req, res)=>{
    Plans.findAll({
        where: {
            username: req.user.username
        }
    }).then(data =>{
        res.send({"message":'getPlan-success',"result":data})
    }).catch(err=>{
        res.send({"message":err})
    })
}

// 保存计划
const savePlan = (req, res) =>{
    const plan = req.body
    plan.username = req.user.username
    Plans.create(plan).then(()=>{
        res.status(200).send({'message':'save-success'})
    }).catch( error =>{
        res.send({'message':'save-error','error':error})
    })
}

// 删除计划
const deletePlan = (req,res)=>{
    const plan = req.body
    console.log(plan)
    Plans.destroy({
        where:{
            id:plan.id,
            username:req.user.username
        }
    }).then(()=>[
        res.status(200).send({"message":"delete-success"})
    ]).catch((err)=>{
        res.send({"message":err})
    })
}

//修改计划
const modifyPlan = (req,res)=>{
    const plan = req.body
    Plans.update(plan,{
        where:{
            id:plan.id,
            username:req.user.username
        }
    }).then(()=>{
        res.status(200).send({"message":"modify-success"})
    }).catch(error =>{
        res.send({"message":error})
    })
}

// 完成计划标记
const finishPlan = (req,res)=>{
    const plan = req.body
    Plans.update({state:1},{
        where:{
            id:plan.id,
            username:req.user.username
        }
    }).then(()=>{
        res.status(200).send({"message":"finish-success"})
    }).catch(error =>{
        res.send({"message":error})
    })
}

// 恢复完成计划
const unFinishPlan = (req,res)=>{
    const plan = req.body
    Plans.update({state:0},{
        where:{
            id:plan.id,
            username:req.user.username
        }
    }).then(()=>{
        res.status(200).send({"message":"unFinish-success"})
    }).catch(error =>{
        res.send({"message":error})
    })
}

module.exports = {
    getPlan,
    savePlan,
    deletePlan,
    modifyPlan,
    finishPlan,
    unFinishPlan
}