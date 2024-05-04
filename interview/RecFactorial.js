function RecursiveFactorial (n){

    if( n===0 ){
        return 1
    }

    return n * RecursiveFactorial(n -1)

}

console.log(RecursiveFactorial(2))




// factorial
// !0 = 1
//!1 = 1*1
// ! 2 = 2 * 1
// !3 = 3*2*1  3*!2