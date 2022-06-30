<template>
  <div>
<header class="index_header">
			<img src="@/assets/image/logo.jpg" class="index_logo" />
            <index-title :text="title"/>
			<div class="index_right_panel">
                <router-link  to="#" id="setting"  class="index_right_choise"><span class="glyphicon glyphicon-cog"></span>设置</router-link>
                <router-link  to="/index/logout" id="setting"  class="index_right_choise"><span class="glyphicon glyphicon-cog"></span>注销</router-link>
				<div class="btn-group">	
					<button type="button" class="btn index-btn-mybtn dropdown-toggle" data-toggle="dropdown">
						<span class="sr-only">菜单</span>
						<span class="index_icon-bar"></span>
						<span class="index_icon-bar"></span>
						<span class="index_icon-bar"></span>
					</button>
					<div class="dropdown-menu" role="menu">
						<router-link id="setting" to="#" class="dropdown-item" >
							<span class="glyphicon glyphicon-cog"></span>设置
						</router-link >
						<router-link to="/index/logout" class="dropdown-item">
							<span class="glyphicon glyphicon-off"></span>注销
						</router-link>
					</div>
				</div>
			</div>
		</header>
  </div>
</template>


<script>
import indexTitle from './index-title.vue'


export default{
    components:{
        indexTitle,
    },
    data(){
        return{
            title:'日常'
        }
    },
    methods:{
        changePage(page){
            this.title = page
        }
    }
}
</script>


<style scoped>

</style>