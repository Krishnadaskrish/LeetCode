var isSameAfterReversals = function(num) {

    const numStr = num.toString()

   const reverse1 = parseInt(numStr.split('').reverse().join(''))
   console.log(reverse1)

   

    const reverse2 = parseInt(reverse1.toString().split('').reverse().join(''));
    console.log(reverse2)
    typeof(reverse2)

    return reverse2==num



   
    
};

isSameAfterReversals(1000)