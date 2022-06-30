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
          @click="recoverPlan(plan)"
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
    finish() {},
    // 删除
    deleteItem() {},
    modify(){
      this.$emit('modify')
      //TODO 修改
    }
  },
};
</script>


<style scoped>
</style>