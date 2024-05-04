// problem : give an integer 'n' find the factorial of that integer 
// in math the factorial of non-neg integer 'n' ,denoted n! is the product of all positive integer less then equal to 'n'
// factorial of (4) = 4*3*2*1 = 24


function factorialnum (n){
    let result = 1

    for(let i = 2 ; i <= n ; i++){
         result = result * i
    }
    return result

}

console.log(factorialnum(5))

// big-o O(n) liner time complexity