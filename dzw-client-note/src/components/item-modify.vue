<template>
  <div class="modify">
    <a href="javascript:void(0);" class="card add-card">
      <span class="glyphicon glyphicon-pencil">
        <span v-show="aORm === 1">正在修改</span>
        <span  v-show="aORm === 0">添加任务</span>
      </span>
    </a>
    <div class="card">
      <div class="card-header">
        <input
          type="text"
          v-model="newTask.title"
          class="form-control my-form-control"
          name="title"
          id="save_task_title"
          placeholder="请输入备忘录标题"
          
        />
      </div>
      <div class="card-body">
        <textarea
          v-model="newTask.content"
          class="form-control my-form-control"
          rows="3"
          id="save_task_content"
          placeholder="请输入备忘录内容"
        ></textarea>
        <div class="card-body-bottom">
          <input
            type="text"
            v-model="newTask.finishtime"
            class="form-control my-form-add-control"
            name="title"
            id="save_task_finishtime"
            placeholder="完成时间"
          />
          <select
            v-model.number="newTask.importance"
            class="form-control my-form-add-control"
            id="save_task_importance"
          >
            <option disabled selected>优先级</option>
            <option value="3">优先级-紧迫</option>
            <option value="2">优先级-正常</option>
            <option value="1">优先级-可不做</option>
          </select>
          <div class="btn-group card-btn-group">
            <button
              class="btn card-btn btn-success"
              id="saveTask"
              @click="saveTask"
            >
              <span class="glyphicon glyphicon-saved"></span>保存
            </button>
            <button class="btn card-btn btn-warning" @click="cancelSave">
              <span class="glyphicon glyphicon-minus"></span>取消
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { dailyTaskApi } from '@/utils/api'
import { taskData } from '@/utils/getData'

export default{
    props:{
      //判断是修改还是添加 0 --> 添加，1 --> 修改 
      aORm:{
        type:Number,
        default:0
      },
      // 需要修改的id
      item:{
        type:Object,
        default:()=>{}
      }

    },
    data() {
        return {
            defaultList:{
                title:'',
                content:'',
                state:0,
                finishtime:'',
                importance:1
            },
            mythis :this
             
        }
    },
    computed:{
      newTask(){
        if(this.aORm === 1){
          return this.item
        }else{
          console.log(111)
          return this.defaultList
        }
      }
    },
    methods:{
        async saveTask(){
            //TODO保存
            let data
            //添加
            if(this.aORm === 0){
                console.log('添加')
                data = await dailyTaskApi.addtask(this.newTask).then(res => res.data)
            }
            //修改
            if(this.aORm === 1){
                console.log('修改')
                this.newTask.id = this.item.id
                data = await dailyTaskApi.updateTasks(this.newTask).then(res => res.data)
            }
            if(data.message === 'modify-success' || data.message === 'save-success'){
                  // 重新获取列表
                  // 关闭面板 
                  this.cancelSave()
                  taskData.getTasks(this)
              }else{
                  alert(data.message)
              }

        },
        cancelSave(){
            //TOD取消，关闭界面
            this.$emit('cancel')
        }
        
    },

}
</script>


<style scoped>



</style>