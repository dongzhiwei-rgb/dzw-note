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
import { taskData,planData } from '@/utils/getData'

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
        //数据加载
        taskData.getTasks(this)
        planData.getPlans(this)


    }
}
</script>

<style scoped>

</style>