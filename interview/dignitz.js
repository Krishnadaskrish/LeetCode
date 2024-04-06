// // function num(a,b){
// //     return a+b
// // }

// // function newfun (num){
// //     return num 

// // }

// // const every = newfun(num(1,2))
// // console.log(every)



// // setTimeout(myinterval,3000)

// // function myinterval (){
// //     document.getElementById('demo').innerHTML = 'i love you'
// // }


// //setImmediate()
// // when we went to execute some function asynchronously but soon as posssible after finishing the current block
// console.log('another')
// setImmediate(() => {
//     const news = sum(2,3)
//     console.log(news)
// })

// function sum(a,b){
//    return a+b
// }

// //when we want execute some funnction async after a specified delay and after finidhing the current block

setTimeout(()=>{
    console.info('2.execution')

},1000)

console.info('1.excecution')


setTimeout(()=>{
console.log('neeeee')
},3000)
setImmediate(()=>{
    console.log('vaaaa')
})

process.nextTick(()=>{
    console.log('uuuuuu')
})

// error handling middleware

const errorHandler = (err,req,res,next)=>{
    res.status(500).json({error : 'internal'})
}

