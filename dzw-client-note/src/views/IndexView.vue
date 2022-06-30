<template>
    <div id="app">
        <index-section/>
        <index-header />
        <aside>
            <item-modify @modify="ismodify = true" :style="ismodify ?'':'display:none'"/>
            <router-view></router-view>
        </aside>
    </div>
</template>



<script>
import IndexHeader from '@/components/index-header.vue'
import indexSection from '@/components/index-section.vue'
import itemModify from '@/components/item-modify.vue';

export default{
    components: {
        IndexHeader,
        indexSection,
        itemModify
    },
    data() {
        return {
            ismodify:false
        }
    }
}
</script>

<style scoped>

</style>