// 计划状态
import { planApi } from "@/utils/api"
export default{
    namespaced:true,
    state:{
        // 计划信息
        planlist:[]
    },
    getters: {
        getFinishItem(state){
            return state.planlist.filter(item => item.state === 1)
        },
        getUnFinishItem(state){
            return state.planlist.filter(item => item.state === 0)
        },
        getPlanList(state){
            return state.planlist
        }
    },
    mutations:{
        setPlanList(state,planList){
            state.planlist = []
            
            planList.forEach(plan =>{
                state.planlist.unshift(plan)
            })
        }
    },
    actions:{
        // 获取修改更新后的数据
        async getPlanList(context){
            const data = await planApi.getplan().then(res => res.data)
            if (data.result){            
                context.commit('setPlanList',data.result)
                return true
            }
            return false
        }
    }

 }