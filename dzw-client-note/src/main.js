import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'popper.js/dist/umd/popper.min.js'


import '@/assets/style/mycss.css'
// 表单验证
// import VeeValidate from 'vee-validate';

// Vue.use(VeeValidate);
Vue.config.productionTip = false


    // 全局后置钩子
router.afterEach(to => {
    	// 设置title
    	document.title = `云笔记 | ${to.meta.title}`;
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
