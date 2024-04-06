
    // const fetchData = async () => {
    //   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    //   const result = await response.json() 
    //   console.log(result)
      
    // }
    // fetchData()
    
  //set and Map

//   var removeElements = function(head, val) {
//     let obj = new Set(head)
//     let ne = [...obj]
//     console.log(ne)
    
// };


//  var head = [7,7,7,7,7]
//  var val = 7


// console.log(removeElements(head,val),'ghjm')


let array = [{name :'package',price:1223},
            {name :'to',price:134},
            {name :'topy',price:138},
            {name :'topolo',price:1300}] 

const MapArray = array.map((item)=>{
  return item.name
})
console.log(MapArray)

const filterArray = array.filter((item)=>{
  return item.price < 500
})
console.log(filterArray)

const findArray = array.find((item)=>{
  return item.price === 134
})
console.log(findArray)

array.forEach((item)=>{
  console.log(item.name)
})

const SomeArray = array.some((item)=>{
  return item.price < 100 
})
console.log(SomeArray)   //using array some its only returns true and false values at certain condition


const everyArray = array.every ((item)=>{
  return item.price < 1500
})
console.log(everyArray) // its checks every elements in the array an retuns an true or false value in the certain condition

const totalprice = array.reduce((currentTotal, item)=>{
  return currentTotal + item.price
},0 )

console.log(totalprice)

const includesTwo = array.includes(price =138)
console.log(includesTwo)

