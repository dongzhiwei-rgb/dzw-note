import axios from 'axios'



//获取token状态
const getToken = ()=>{
    const localData = localStorage.getItem('vuex-data')
    if (localData){
        const token = JSON.parse(localData).user.token
        return token
    }
    return null
}

const instance = axios.create({
    baseURL:"http://127.0.0.1:8081",
    timeout:5000,
})


export class userApi  {
    // 注册请求
    static async register(data){
        return instance.post('/user/register',data)
    }
    // 登录请求
    static async login(data){
        return instance.post('/user/login',data)
    }
    // 修改头像
    static async sethead(data){
        // 设置请求头
        instance.defaults.headers = {
            "Content-Type": "multipart/form-data",
            "Authorization":"Bearer "+getToken()
        }
        return instance.post('/user/upload',data)
    }
    // 获取头像
    static async gethead(){
        instance.defaults.headers = {"Authorization":"Bearer "+getToken()}
        return instance.get('/user/getheadeimage')
    }
}



export class dailyTaskApi {
    static setHeader(){
        instance.defaults.headers = {"Authorization":"Bearer "+getToken()}
    }
    // 添加日常任务
    static async addtask(taskData){
        this.setHeader()
        return instance.post('/task/dailytask/save',taskData)
    }

    // 获取日常任务列表
    static async getTasks(){
        this.setHeader()
        return instance.get('/task/dailytask/get')
    }
    //TODO 修改日常任务
    static async updateTasks(data){
        this.setHeader()
        return instance.post('task/dailytask/modify',data)
    }
    // 删除日常任务
    static async deleteTasks(idAndusername){
        this.setHeader()
        return instance.post('/task/dailytask/delete',idAndusername)
    }
    // 标记完成日常任务
    static async finishTasks(idAndusername){
        this.setHeader()
        return instance.post('/task/dailytask/finish',idAndusername)
    }
    // 撤销标记完成 
    static async unfinishTasks(idAndusername){
        this.setHeader()
        return instance.post('/task/dailytask/unfinish',idAndusername)
    }
}



export class planApi {
    static setHeader(){
        instance.defaults.headers = {"Authorization":"Bearer "+getToken()}
    }

    // 添加计划
    static async addplan(planData){
        this.setHeader()
        return instance.post('/task/plan/save',planData)
    }
    // 获取计划
    static async getplan(planData){
        this.setHeader()
        return instance.get('/task/plan/get',planData)
    }
     // 删除计划
     static async deleteplan(planData){
        this.setHeader()
        return instance.post('/task/plan/delete',planData)
    }
    // 修改计划
    static async modifyplan(planData){
        this.setHeader()
        return instance.post('/task/plan/modify',planData)
    }
    // 完成计划标记
    static async finishplan(planData){
        this.setHeader()
        return instance.post('/task/plan/finish',planData)
    }
    // 撤销完成
    static async unfinishplan(planData){
        this.setHeader()
        return instance.post('/task/plan/unfinish',planData)
    }

}