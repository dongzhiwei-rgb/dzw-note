export class taskData {
    //获取任务数据列表
    static async getTasks(context){
        const res = await context.$store.dispatch('task/getTaskList')
        if (res){
            console.log('列表已获取')
        }
    }
}