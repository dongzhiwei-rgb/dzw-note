// 任务状态
import { dailyTaskApi } from "@/utils/api"
export default{
    namespaced:true,
    state:{
        // 任务信息
        tasklist:[]
    },
    getters: {
        getFinishItem(state){
            return state.tasklist.filter(item => item.state === 1)
        },
        getUnFinishItem(state){
            return state.tasklist.filter(item => item.state === 0)
        },
        getTaskList(state){
            return state.tasklist
        }
    },
    mutations:{
        setTaskList(state,taskList){
            state.tasklist = []
            
            taskList.forEach(task =>{
                state.tasklist.unshift(task)
            })
            // //初始化
            // if(state.tasklist.length === 0) {
            //     taskList.forEach(task =>{
            //         state.tasklist.unshift(task)
            //     })
            //     return
            // }
            // // 得到的结果是对象数组
            // // 筛选出新增
            // taskList.forEach(item => {
            //     //提取出所有id
            //     let listId = state.tasklist.map(task => task.id)
            //     //筛选出新增
            //     if(listId.indexOf(item.id) === -1){
            //         state.tasklist.unshift(item)
            //     }
            // })
        }
    },
    actions:{
        // 获取修改更新后的数据
        async getTaskList(context){
            const data = await dailyTaskApi.getTasks().then(res => res.data)
            if (data.result){            
                context.commit('setTaskList',data.result)
                return true
            }
            return false
        }
    }

 }