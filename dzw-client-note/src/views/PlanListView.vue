<template>
<div id="tasks" >
    <add-botton @addTask="add" ></add-botton>
    <item-modify @cancel="cancel" :aORm="aORm" :id="taskId" v-show="isModify"/>
    <note-item :list="unFinishTaskList" type="plan"  @modify="modify" v-on="$listeners"/>

</div>
</template>


<script>
// @ is an alias to /src
import noteItem from '@/components/note-item.vue'
import addBotton from '@/components/add-botton.vue'
import itemModify from '@/components/item-modify.vue';
export default {
  components: {
    noteItem,
    addBotton,
    itemModify
  },
  data() {
    return {
        aORm:0,
        taskId:1,   
        isModify: false
      }
  },
  methods:{
    modify(id){
        this.aORm = 1
        this.taskId = id
        this.isModify = true
    },
    cancel(){
        this.isModify = false
    },
    add(){
        this.aORm = 0
        this.isModify = true
    }
  },
  computed: {
    finishTaskList(){
        return this.$store.getters['task/getFinishItem']
    },
    unFinishTaskList(){
        return this.$store.getters['task/getUnFinishItem']
    }

  },


}
</script>

<style>

</style>