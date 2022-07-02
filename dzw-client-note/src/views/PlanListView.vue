<template>
<div id="tasks" >
    <add-botton @change="beginAdd" v-show="!isModify"></add-botton>
    <plan-modify @cancel="cancel" :aORm="aORm" :item="item" v-show="isModify"/>
    <note-item :list="planList" type="plan"   @modify="modify" v-on="$listeners"/>


</div>
</template>


<script>
// @ is an alias to /src
import noteItem from '@/components/note-item.vue'
import addBotton from '@/components/add-botton.vue'
import planModify from '@/components/plan-modify.vue';
export default {
  components: {
    noteItem,
    addBotton,
    planModify
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
    //TODO 获取计划列表
    planList(){
        return this.$store.getters['plan/getPlanList']
    }

  },


}
</script>

<style>

</style>