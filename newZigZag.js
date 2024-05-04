var convert = function(s, numRows) {
    let sarray = []
    console.log(sarray)
    const newS = s.split('')
    for (let i = 0 ; i<newS.length ; i++  ){
        for(let j = 0 ; j<numRows-1 ; j++){
            if(newS[i]==newS[j] && ){
                sarray.push(newS[j])
            }
        }
    }
    
    console.log(sarray)
    
};

const s = "PAYPALISHIRING"
const newRow = 3
console.log(convert(s,newRow))