<template>
    <div id="app">
        <index-section/>
        <index-header />
        <aside>
            <router-view></router-view>
        </aside>
    </div>
</template>



<script>
import IndexHeader from '@/components/index-header.vue'
import indexSection from '@/components/index-section.vue'
import { taskData } from '@/utils/getData'

export default{
    components: {
        IndexHeader,
        indexSection,
    },
    data() {
        return {
            ismodify:false
        }
    },

    mounted() {
        taskData.getTasks(this)

    }
}
</script>

<style scoped>

</style>