<template>
<!-- 搜索页面开始 -->
			<div id="search" >
				<input  type="text" name="search" class="form-control mysearch-input" placeholder="请输入搜索内容...">
				<!-- $listener孙子组件传值 父亲组件监听 -->
                <note-item :list="TaskList" type="task" v-on="$listeners"/>
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
        }
    },
    components: {
        noteItem
    }
}
</script>


<style scoped>


</style>