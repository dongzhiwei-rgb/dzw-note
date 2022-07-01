import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const LoginView = ()=> import(/* webpackChunkName: "login" */ '@/views/LoginView.vue')
const RegView = () => import(/* webpackChunkName: "register" */ '@/views/RegisterView.vue')
const IndexView = () => import(/* webpackChunkName: "index" */ '@/views/IndexView.vue')
const SearchView = () => import(/* webpackChunkName: "search" */ '@/views/SearchView.vue')
const DailyView = ()=> import(/* webpackChunkName: "daily" */ '@/views/DailyListView.vue')
const PlanView = ()=> import(/* webpackChunkName: "plan" */ '@/views/PlanListView.vue')


const RouterName = {
    home:'home',
    login:'login',
    register:'register',
    index:'index',
    search:'search',
    daily:'daily',
    plan:'plan'
}

const routes = [
  {
    path: '/',
    name: RouterName.home,
    redirect:'/login',
    component: HomeView,
    children:[
      {
        path:'/login',
        name:RouterName.login,
        component:LoginView
      },
      {
        path:'/register',
        name:RouterName.register,
        component:RegView
      }
    ]
  },
  {
    path: '/index',
    name: RouterName.index,
    redirect:{name:RouterName.search},
    component: IndexView,
    beforeEnter: (to, from, next)=>{
      //判断本地token是否存在
      const token = JSON.parse(localStorage.getItem('vuex-data')).user.token
      if(token === null){
        alert('请登录!')
        next({path:'/'})
      }else{
        next()
      }
    },
    children:[
      {
        path:'/index/search',
        name:RouterName.search,
        component:SearchView
      },
      {
        path:'/index/daily',
        name:RouterName.daily,
        component:DailyView
      },
      {
        path:'/index/plan',
        name:RouterName.plan,
        component:PlanView
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
