<template>
    <div>
        <header class="login_header">
		<div class="logo_container">
			<img src="#" class="logo_image" />
			<p class="logo_title">鲲鹏笔记</p>
		</div>
		<div class="right_panel">
            <router-link to="/login" class="right_choise" >登陆</router-link>
            <router-link to="/register" class="right_choise" >注册</router-link>
			<div class="btn-group">	
				<button type="button" class="btn btn-mybtn dropdown-toggle" data-toggle="dropdown">
					<span class="sr-only">菜单</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<div class="dropdown-menu" role="menu">
                    <router-link to="/login" class="dropdown-item" >登陆</router-link>
                    <router-link to="/register" class="dropdown-item" >注册</router-link>
				</div>
			</div>
		</div>
	</header>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

/*网页头部开始*/
.login_header{
	height: 86px;
	border-bottom-style: solid;
	border-width:1px;
	border-color: rgb(220,220,220);
	padding: 20px 10px;
}


.logo_container{
	height: 45px;
	width: 180px;
	display: inline;
}
.logo_image{
	height: 45px;
	width: 45px;
	display: inline;
}
.logo_title{
	height: 45px;
	width: 135px;
	margin:0px;
	font-size: 30px;
	font-family: 华文行楷;
	font-weight: bold;
	vertical-align: middle;
	display: inline;
}


.right_panel{
	line-height: 45px;
	width: 210px;
	float: right;
	vertical-align: middle;
	display: inline;
}
.right_choise{
	height: 45px;
	margin-right: 25px;
	font-size: 20px;
	font-family: 华文行楷;
	color: grey;
	display: inline;
}
.dropdown-toggle::after {
	border:0px;
}
.icon-bar{
	background-color: #888;
	margin-top: 4px;
	display: block;
	width: 22px;
	height: 3px;
	border-radius:1px;
}
.btn-mybtn{
	height: 45px;
	padding-top: 7px;
	background-color: white;
}
.dropdown-menu{
	height: 130px;
	min-width: 100px;
	border-radius:10px;
	border-color:rgb(220,220,220);
	position: relative;
	left: -80px;
	font-size: 20px;
	font-family: 华文行楷;
	color: grey;
}
@media screen and (max-width: 768px) {
	.right_panel{
		width: 50px;
	}
	.right_choise{
		display: none;
	}
}
/*头部结束*/

</style>