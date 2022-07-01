// export default function(fn,time){
//     let timer = null
//     return function () {
//         console.log(fn)
//         // 清空定时器
//         if(timer !== null){
//             clearTimeout(timer)
//             timer = null
//         }
//         //重新计时
//         timer = setTimeout(()=>{
//             fn()
//         },time)
//     }
// }