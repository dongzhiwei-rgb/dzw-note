import axios from 'axios'

const instance = axios.create({
    baseURL:"http://127.0.0.1:8081",
    timeout:5000
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