// factorial number

// given an integer and find the factorial of that integer 
// the factorial of non negativ integer 'n' denoted n! is the product of all positive integers lessthan or equal to n
//factorial (4) = 4*3*2*1 = 24

function factorial (n) {
   let result = 1
   for (let i = 2 ; i<=n ; i++){
      result = result * i
   }
   return result
}

console.log(factorial(3))