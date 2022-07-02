// 用户状态
// import Vue from 'vue'
 export default{
    namespaced:true,
    state:{
      //用户信息
      username:'',  
      token:null,
      imgUrl:''
    },
    getters: {
        getToken(state){
            return state.token
        },
        getUsername(state){
            return state.username
        },
        getImgUrl(state){
            return state.imgUrl
        }
    },
    mutations:{
        setUser(state,userData){
            // console.log("userData:::",userData)
            state.username = userData.username
            if(userData.imgUrl){
                state.imgUrl = userData.imgUrl
            }
            if (userData.token){
                state.token = userData.token
            }
            
        },
        setImgHead(state,imgUrl){
            console.log('设置头像')
            state.imgUrl = imgUrl
            
            // Vue.set(state,'imgUrl',imgUrl)
        }
    },
    actions:{

    }

 }

