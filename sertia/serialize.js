//serialize an javascript value 


function serialize (value){
  try {
     return JSON.stringify(value)
    
  } catch (error) {
    console.log(error)
  }
}

const neWObj = {
    name : 'krishnadas',
    email : 'krishnadas10.official@gmail.com' ,
    password : 1234556 ,
    user : true

}
console.log(typeof(neWObj)) 
const serialValue = serialize(neWObj)
console.log(typeof(serialValue),'kkkk')


//Implement a function that performs a deep copy of a value, but also handles circular references.


function DeepCopy (obj , value = new WeakMap()){

    if(obj== null || typeof obj !== 'object') {
        return obj
    }

    if (value.has(obj)){
        return value.get(obj)
    }

    let copy
    
    if(obj instanceof Date){
        copy = new Date(obj)
    }else if(obj instanceof RegExp){
        copy = new RegExp(obj)
    }else{
        copy = Array.isArray ? [] : {}
    }

    for(num in obj ) { 
        if(Object.prototype.hasOwnProperty.call(obj,num)){
            copy[num] = DeepCopy(obj[num] , value)
        }

        return copy
    }

}


simobj = {
    val : 2 ,
    pair :{
        age : 33
    }
}

simobj.circularRef = simobj


const depestinstance = DeepCopy(simobj)

console.log(depestinstance.circularRef === depestinstance); 

// Implement a function that determines if two values are deep equal


function deepEqual (val1,val2){

    if(val1 === val2){
       return true
    }

    if(val1 == null || val2 == null || typeof(val1)!== 'object' || typeof(val2) !== 'object'){
        return false
    }

    const keys1 = Object.keys(val1);
    const keys2 = Object.keys(val2);
  
    // If the number of keys is different, objects are not deep equal
    if (keys1.length !== keys2.length) {
      return false;
    }

    for(key of keys1){
        if(!keys2.includes(key) || !deepEqual(val1[key],val2[key])){
            return false
        }
    }

    //if this condition satisfy 
    return true



}

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
const obj3 = { a: 1, b: { c: 3 } };

console.log(deepEqual(obj1, obj2)); 
console.log(deepEqual(obj1, obj3));