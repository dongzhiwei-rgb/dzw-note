const time = 60 // 分钟
export const cleartoken = (context)=>{
    setTimeout(() =>{
        context.$store.commit('user/stUser',{username:'',token:null})
    },time * 60 * 1000)
}