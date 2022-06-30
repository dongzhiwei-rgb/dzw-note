<template>
  <div class="home">
    <note-header/>
      <router-view></router-view>
    <note-footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import noteHeader from '@/components/note-header.vue'
import noteFooter from '@/components/note-footer.vue'

export default {
  name: 'HomeView',
  components: {
    noteHeader ,
    noteFooter 
  }
}
</script>
