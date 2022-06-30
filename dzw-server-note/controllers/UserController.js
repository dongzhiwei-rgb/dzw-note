const User = require('../model/User')
// 注册 密码加密存储
const bcrypt = require('bcryptjs')
// 登录 生成token
const jwt = require('jsonwebtoken')
//上传文件
const multer = require('multer')

const fs = require('fs')

// 注册
const register = (req, res)=>{
    const userData = req.body
    // 检查用户名是否存在
    User.findOne({ 
        where:{
            username:userData.username
        }
    }).then(user =>{
        if(!user){
            //加密
            bcrypt.hash(req.body.password,10,(err,hash)=>{
                userData.password = hash;

                User.create(userData).then((user)=>{
                    res.send({'message':'reg-success'})//注册成功
                }).catch(err =>{
                    res.send({'message':'reg-createError'})//注册失败
                })
            })
        }else{
            // 用户已存在
            res.send({'message':'reg-exist'})
        }
    }).catch(err =>{
        res.send({'message':'reg-sqlError'})//数据库错误
    })
}

// 登录
const login = (req,res)=>{
    const userData = req.body
    User.findOne({
        where:{
            username:userData.username
        }
    }).then((user)=>{
        if(user){
            // 匹配密码 加密匹配
            if(bcrypt.compareSync(userData.password,user.password)){
                //匹配成功 生成token前面
                let token = jwt.sign({username:userData.username},process.env.SECRET_KEY,{
                    expiresIn:'3600s' //过期时间s
                })
                console.log(token)
                res.send({"message":"success","token":token})
            }
        }else{
            res.send('login-error')//用户名或密码错误
        }
    }).catch(() => res.send({'message':'login-noUser'}))//用户不存在
}   



//设置头像
//定义中间件储存对象
var storage = multer.diskStorage({
	destination:(req,file,cb)=>{
		cb(null,'upload/headimage/');//存储位置
	},
	filename:(req,file,cb)=>{
		cb(null,req.session.username+'.jpg');
	}
});
//中间件
var upload = multer({storage:storage});
const [options,changeHeadImage] = [upload.single('headimg'),(req,res)=>{
    res.send({"message":'change-success'})
}]


// 获取头像
const getheadimage = (req,res)=>{
    const headImage = 'upload/headimage/'+req.user.username+'.jpg'
    fs.existsSync(headImage,(exist =>{
        if(exist){
            fs.readFile(headImage,(err,image)=>{
                if(err){
                    console.log(err)
                    res.send({'message':err})
                }else{
                    res.type('image/jpeg').send(image)
                }
            });
        }else{
            // 使用默认头像
            fs.readFile('upload/defaultimage/headimg.jpg',(err,image)=>{
                if(err){
                    console.log(err)
                    res.send({'message':err})
                }else{
                    res.type('image/jpeg').send(image)
                }
            })
        }
    }))
}


module.exports = {
    register,
    login,
    options,
    changeHeadImage,
    getheadimage

};