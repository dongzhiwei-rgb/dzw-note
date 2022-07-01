<template>
  <div class="item">
    <div class="card" v-for="item in list" :key="item.index">
      <div
        class="card-header"
        v-show="item.state === 0"
        :class="cardColor(item.importance)"
      >
        <a href="javascript:void(0);" style="color: black">
          {{ item.title }}
        </a>
        <a href="javascript:void(0);" class="card-done" @click="finish(item)">
          <span class="glyphicon glyphicon-ok"></span>完成
        </a>
      </div>

      <div
        class="card-header"
        v-show="item.state === 1"
        :class="cardColor(item.importance)"
        style="text-decoration: line-through"
      >
        <a href="javascript:void(0);" style="color: black">{{ item.title }}</a>
        <a
          href="javascript:void(0);"
          class="card-done"
          @click="recover(item)"
        >
          <span class="glyphicon glyphicon-repeat"></span>恢复
        </a>
      </div>

      <div class="card-body">
        <span v-show="type === 'task'">{{item.content}}</span>
        <div class="card-body-bottom">
          <!-- 任务显示时间 -->
          <span v-show="type === 'task'">时间:{{item.finishtime}}</span>
          <!-- 计划的时间显示 -->
          <span v-show="item.state === 0 && type === 'plan'">
            时间:{{ item.starttime }}~{{ item.finishtime }}
          </span>
          <span v-show="item.state === 1  && type === 'plan'"> 时间:{{ item.finishtime }} </span>


          <div class="btn-group card-btn-group">
            	<button v-show="item.state === 0" class='btn card-btn btn-info' @click="modify(item)">
									<span class="glyphicon glyphicon-pencil"></span>修改
							</button>
            <button class="btn card-btn btn-danger" @click="deleteItem(item)">
              <span class="glyphicon glyphicon-trash"></span>删除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dailyTaskApi,planApi } from '@/utils/api'
import {taskData,planData} from '@/utils/getData'


export default {
  props: {
    type:{
      type:String
    },
	  list: {
      type: Array,
	  //引用类型用return
      default:() => []
    },
  },
  data() {
    return {

    }
  },
  methods: {
    // 完成标记
    async finish(item) {
      if (this.type === 'task'){
          const data = await dailyTaskApi.finishTasks(item).then(res => res.data)
          if(data.message === 'finish-success'){
            //获取更新数据
            taskData.getTasks(this)
          }else{
            alert(data.message)
          }
      }else {
          const data = await planApi.finishplan(item).then(res => res.data)
          if(data.message === 'finish-success'){
            //获取更新数据
            planData.getPlans(this)
          }else{
            alert(data.message)
          }
      }

    },
    //撤销完成标记
    async recover(item){
      if(this.type === 'task'){
          const data = await dailyTaskApi.unfinishTasks(item).then(res => res.data)
          if(data.message === 'unFinish-success'){
            //获取更新数据
            taskData.getTasks(this)
          }else{
            alert(data.message)
        }
      }else {
          const data = await planApi.unfinishplan(item).then(res => res.data)
          if(data.message === 'unFinish-success'){
            //获取更新数据
            planData.getPlans(this)
          }else{
            alert(data.message)
        }
      }
    },
    // 删除
    async deleteItem(item) {
      if (this.type === 'task'){
        const data = await dailyTaskApi.deleteTasks(item).then(res => res.data)
          if(data.message === 'delete-success'){
          //获取更新数据
            taskData.getTasks(this)
          }else{
            alert(data.message)
        }
      }else{
        const data = await planApi.deleteplan(item).then(res => res.data)
        if(data.message === 'delete-success'){
          //获取更新数据
          planData.getPlans(this)
        }else{
          alert(data.message)
        }
      }
    },
    modify(item){
      //TODO展开修改组件，并传递itme id数据
      this.$emit('modify',item)
    },
    //改变不同优先级显示的颜色
		cardColor(importance){
			if (importance===1) {
					return "bg-success"
			}else if (importance===2) {
					return "bg-warning"
			}else{
					return "bg-danger"
		  }
    }
  }
}
</script>


<style scoped>
</style>