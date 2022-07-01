<template>
  <div>
    <a
      href="javascript:void(0);"
      class="card add-card"
      @click="change"
    >
      <span class="glyphicon glyphicon-plus">添加</span>
    </a>

    
  </div>
</template>


<script>


export default {
    data () {
        return {
            
        }
    },

    methods:{
        change(){
            this.$emit('change')

        }

    }
};
</script>


<style scoped>
</style>