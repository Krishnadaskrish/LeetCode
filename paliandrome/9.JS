function isPaliandrome (x){

    if (x < 0 || x % 10 === 0 && x !==0){
        return false
    }

    let ogSrting = x 
    let revString = 0

    while(x > 0 ){

        const digit = x % 10 ;
        revString = revString * 10 + digit 
        x = Math.floor(x/10)

    }
     
    return ogSrting === revString


}

 const x = 121;

console.log(isPaliandrome(x))