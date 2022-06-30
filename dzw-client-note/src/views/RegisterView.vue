<template>
	<div class="lr-form">
		<div class="container">
			<div class="title-container">
				<div class="form-title">
					使用<span style="font-family: 华文行楷;color: #66CD00;">鲲鹏笔记</span>
				</div>
				<div class="form-title form-title-s">
					管理你的工作学习
				</div>
			</div>
			<div class="form-register">
				<form @submit.prevent="" role="form" id="form" class="form-group" name="login" action="javascript:void(0);" method="post">
					<input type="text" name="name" class="form-control"  v-model="username" placeholder="用户名">
					<input type="password" name="password" class="form-control" v-model="password" placeholder="请输入密码">
					<input type="password" name="password" class="form-control"  v-model="password2" placeholder="再次输入密码">
					<button id="submit" @click="submit" class="btn btn-success">立即注册</button>
				</form>
			</div>
			<div class="introduce">
				<img src="@/assets/image/intro_picture.jpg" class="intro-content-l">
				<div class="intro-content-r">
					<h2 style="color:white;font-family: 华文行楷">鲲鹏笔记</h2><p style="color:white;">无论是点滴灵感、待办清单、或是会议记录、项目资料，笔记在手，方便随时记录，永久保存内容。让生活有条不紊，用好每一分每一秒。</p>
                    <router-link to="/login">登陆账户</router-link>
			
				</div>
			</div>
		</div>
	</div>
</template>


<script>
import { userApi } from '@/utils/api'

export default {
    data () {
        return {
            username: '',
            password: '',
            password2: '',
        }
    },
    methods: {
        async submit(){
            const userData = {
                username: this.username,
                password: this.password,
            }
            const res = await userApi.register(userData).then(res =>  res.data.message)
            // console.log("res::",res)
            // 注册成功
            if (res === 'reg-success'){
                //用户名存储到localStorage
                this.$store.commit('user/setUser',userData)
                // 跳转到登录界面
                this.$router.push({
                    name:'login'
                })
            }else{
                alert(res)
            }
        }
    }
}
</script>


<style scoped>

@import '@/assets/style/mycss-form.css'

</style>