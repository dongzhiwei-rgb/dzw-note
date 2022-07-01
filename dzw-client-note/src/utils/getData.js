export class taskData {
    //获取任务数据列表
    static async getTasks(context){
        const res = await context.$store.dispatch('task/getTaskList')
        if (res){
            console.log('列表已获取')
        }
    }
}

export class planData {
    //获取计划数据列表
    static async getPlans(context){
        const res = await context.$store.dispatch('plan/getPlanList')
        if (res){
            console.log('计划列表已获取')
        }
    }
}