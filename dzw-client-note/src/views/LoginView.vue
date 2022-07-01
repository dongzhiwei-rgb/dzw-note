<template>
    	<div class="lr-form">
		<div class="container">
			<div class="title-container">
				<div class="form-title">
					使用<span style="font-family: 华文行楷;color: #66CD00;">小董笔记</span>
				</div>
				<div class="form-title form-title-s">
					管理你的工作学习
				</div>
			</div>
			<div class="form-container">
				<form role="form" class="form-group" name="login" action="javascript:void(0);" method="post">
					<input type="text" class="form-control" name="name" v-model="username" placeholder="用户名">
					<input type="password" class="form-control" name="password" v-model="password" placeholder="密码">
					<button id="submit" @click="login" class="btn btn-success">立即登陆</button>
				</form>
			</div>
			<div class="introduce">
				<img src="@/assets/image/intro_picture.jpg" class="intro-content-l">
				<div class="intro-content-r">
					<h2 style="color:white;font-family: 华文行楷">小董笔记</h2><p style="color:white;">无论是点滴灵感、待办清单、或是会议记录、项目资料，笔记在手，方便随时记录，永久保存内容。让生活有条不紊，用好每一分每一秒。</p>
					<router-link to="/register"  >创建账户</router-link>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
import { userApi } from '@/utils/api'
import {cleartoken} from '@/utils/deletetoken'

export default{
	data(){
		return {
			username:'',
			password:''
		}
	},
	methods:{
		async login(){
			const loginData = {
				username:this.username,
				password:this.password
			}
			const data = await userApi.login(loginData).then(res => res.data)
			console.log(data)
			if(data.message === 'success'){
				this.$store.commit('user/setUser',{username:loginData.username,token:data.token})
				// 一小时后清除token
				cleartoken(this)
				this.$router.push({
					name:'index'
				})
			}else{
				alert(data.message)
			}
		}
	},
	created(){ 
		const storageData = localStorage.getItem('vuex-data')
		if(storageData){
			this.username = JSON.parse(storageData).user.username
		}
		
	}
}
</script>

<style scoped>


</style>