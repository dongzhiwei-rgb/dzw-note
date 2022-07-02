const time = 60 // 分钟
let timer = null
export const cleartoken = (context)=>{
    // 清除已有定时器
    if(timer !== null) {
        clearTimeout(timer)
        timer = null
    }
    timer = setTimeout(() =>{
        context.$store.commit('user/stUser',{username:'',token:null})
        context.$router.push({
            name:'login'
        })
    },time * 60 * 1000)
}