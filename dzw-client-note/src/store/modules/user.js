// 用户状态

 export default{
    namespaced:true,
    state:{
      //用户信息
      username:'',  
      token:null,
    },
    getters: {
        getToken(state){
            return state.token
        },
        getUsername(state){
            return state.username
        }
    },
    mutations:{
        setUser(state,userData){
            // console.log("userData:::",userData)
            state.username = userData.username
            if (userData.token){
                state.token = userData.token
            }
            
        }
    },
    actions:{

    }

 }

