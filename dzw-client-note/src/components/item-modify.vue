<template>
  <div class="modify">
    <a href="javascript:void(0);" class="card add-card">
      <span class="glyphicon glyphicon-pencil">正在修改</span>
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
            v-model="newTask.importance"
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

export default{
    data() {
        return {
            newTask:{
                title:'',
                content:'',
                finishtime:'',
                importance:''
            }
        }
    },
    methods:{
        saveTask(){
            //TODO保存，提交修改
        },
        cancelSave(){
            //TOD取消，关闭界面
            this.$emit('cancel')
        }
        
    }  

}
</script>


<style scoped>



</style>