<template>
  <div class="index_title">
    {{ text }}
  </div>
</template>


<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>


<style scoped>
.index_title {
  font-family: 楷体;
  font-size: 25px;
  color: #696969;
  vertical-align: middle;
  display: inline;
}
</style>