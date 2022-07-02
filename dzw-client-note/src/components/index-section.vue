<template>
<section class="leftmenu">
			<div class="img_head_area">
				<router-link to="/index/headimage">
					<img class="img_head" :src="headImageUrl"/>
				</router-link> 
			</div>
			<div class="list-group">
				<router-link to="/index/search"  class="list-group-item" >
					<span class="glyphicon glyphicon-search"></span> 搜索
				</router-link>
				<router-link to="/index/daily" class="list-group-item" >
					<span class="glyphicon glyphicon-tasks"></span> 日常
				</router-link>
				<router-link to="/index/plan" class="list-group-item" >
					<span class="glyphicon glyphicon-pushpin"></span> 计划
				</router-link>
				<router-link to="/index/note" class="list-group-item" >
					<span class="glyphicon glyphicon-tags"></span> 便签
				</router-link>
			</div>
</section>
</template>


<script>
//  辅助函数
// import { mapState } from 'vuex'

export default{
	data() {
		return {
			
		}
	},
	computed:{
		headImageUrl:{
			get () {
				return this.$store.state.user.imgUrl
			},
			set (val){
				this.$store.commit('user/setImgHead',val)
			}
		},
		// ...mapState({
    	// 	message: state => state.obj.message
  		// })

	},
	methods: {

	},
	watch:{
		headImageUrl:{
			handler(val){
				console.log(val)
			},
			deep: true
			
		}
	}

}
</script>


<style scoped>

/*左侧选项框*/
.leftmenu{
	width: 90px;
	height: 100%;
	background-color: #353d40;
	position: fixed;
	left: 0px;
}
/*头像区域*/
.img_head_area{
	height: 90px;
	width: 70px;
	margin-left:10px;
	border-bottom:solid #696969 1px;
}
/*头像图片属性*/
.img_head{
	height:70px;
	width:70px;
	margin-top: 10px;
	border-radius:50%;
	overflow:hidden;
	border: 1px solid #FFD700;
}
/*菜单选项的样式*/
.list-group-item{
	height: 50px;
	width: 90px;
	background:#353d40;
	padding:15px;
	color: #A9A9A9;
	font-size: 16px;
	font-family: 楷体;
}
.list-group a:hover{
	color: #FFFFFF;
	background: #000000;
	text-decoration:none;
}
.list-group .active{
	border:0px;
	color: #FFFFFF;
	background: #000000;
}

</style>