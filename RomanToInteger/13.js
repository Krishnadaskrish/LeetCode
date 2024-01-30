/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    var str = s.split('')
    var numStr = []
    var int=0

    for (var i = 0 ; i < str.length ; i++){

        if(str[i] === 'I' ){
            numStr.push(1)
        }else if (str[i] === 'V' ){
            numStr.push(5)
        }else if (str[i] === 'X'){
            numStr.push(10)
        }else if (str[i] === 'L'){
            numStr.push(50)
        }else if (str[i] === 'C'){
            numStr.push(100)
        }else if (str[i] === 'D'){
            numStr.push(500)
        }else if (str[i] === 'M'){
            numStr.push(1000)
        }

    }

    for (var i = 0 ; i < numStr.length-1 ; i++){
        if(numStr[i]<numStr[i+1]){
            int-=numStr[i]
        }else{
            int+=numStr[i]
        }
    }

    int += numStr[numStr.length -1]


    return int

    

};

s = "III"

console.log(romanToInt(s))