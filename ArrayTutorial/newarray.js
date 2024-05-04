function GenerateArray (){
    let Auxarray = []
    let randomlength = Math.floor(Math.random()*100)
    for(let i = 0 ; i<randomlength ; i++){
        Auxarray.push(Math.floor(Math.random()*100));
        return Auxarray
    }
}

let mystupidArray = GenerateArray()
let thelast = mystupidArray[mystupidArray.length-1]
console.log(thelast)


let ggg = ['leee','coo','prr']
let hh = ['pp','oo','ll']

const uu = ggg.concat(hh)
console.log(uu)