var stack = [] 
var word = 'racecar'
var string = ''


for( let i = 0 ; i <word.length ;i++){
    stack.push(word[i])
}

for(let i = 0 ; i <word.length;i++){
    string += stack.pop()
}


if(string === word){
    console.log(true) 
}else{
    console.log(false) 
}

