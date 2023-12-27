var DivideString = function (str,k,fill){
    let result = []
    for(let i = 0 ; i<str.length ; i+=k){
        let part = str.slice(i,i+k)

        if(part.length<k){
            part += fill.repeat(k - part.length)
        }

        result.push(part)
    }
    return result
}

const str = "saturation"
const k = 3
const fill = 'x'

const action = DivideString(str,k,fill)
console.log(action)

