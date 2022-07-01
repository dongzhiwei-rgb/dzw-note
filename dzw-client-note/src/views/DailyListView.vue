<template>
<div id="tasks" >
    <add-botton @change="beginAdd" v-show="!isModify"></add-botton>
    <item-modify @cancel="cancel" :aORm="aORm" :item="item" v-show="isModify"/>
    <li class="tasks-title">正在完成</li>
    <note-item :list="unFinishTaskList" type="task"   @modify="modify" v-on="$listeners"/>
    <li class="tasks-title">已完成</li>
    <note-item :list="finishTaskList" type="task" v-on="$listeners"/>
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
        item:{},   
        isModify: false
      }
  },
  methods:{
    modify(item){
        this.aORm = 1
        this.item = item
        this.isModify = true
    },
    beginAdd(){
      this.aORm = 0
      this.isModify = true
    },
    cancel(){
        this.isModify = false
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