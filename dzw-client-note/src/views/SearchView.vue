<template>
<!-- 搜索页面开始 -->
			<div id="search" >
				<input v-model="searchString" type="text" name="search" class="form-control mysearch-input" @input="mydebounce(out,500)" placeholder="请输入搜索内容...">
                <li class="tasks-title">日常任务</li>
				<!-- $listener孙子组件传值 父亲组件监听 -->
                <note-item :list="TaskList" type="task" v-on="$listeners"/>
                <br>
                <li class="tasks-title">计划</li>
                <note-item :list="PlanList" type="plan" v-on="$listeners"/>

				<!-- <div class="default">
					<div class="mysearch-default" v-if="searchTasks.length===0"></div>
				</div> -->
			</div>
			<!-- 搜索页面结束 -->
</template>


<script>
import noteItem from '@/components/note-item.vue';

export default {
    data() {
        return {
            TaskList:[],
            PlanList:[],
            //搜索关键字
            searchString:'',
            // 防抖计时器
            tiemr : null
        }
    },

    components: {
        noteItem
    },
    methods:{
        //进行查询匹配
        out(){
            let taskList = this.$store.getters['task/getTaskList']
            let planList = this.$store.getters['plan/getPlanList']

            //正则匹配查询
            if (this.searchString !== ''){
                let  keyword = new RegExp(this.searchString)
                this.TaskList = taskList.filter(item => keyword.test(item.title))
                this.PlanList = planList.filter(item => keyword.test(item.title))
            }else{
                this.TaskList = []
                this.PlanList = []
            }
        },
        mydebounce(fn,time){
            // 清空定时器
            if(this.timer !== null){
                clearTimeout(this.timer)
                this.timer = null
            }
            //重新计时
            this.timer = setTimeout(()=>{
                fn()
            },time)
        }
  

    }
}
</script>


<style scoped>


</style>