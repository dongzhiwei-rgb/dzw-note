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