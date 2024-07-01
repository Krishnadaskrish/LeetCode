//fibunacci sequance
// in mathematics the fibunacci secuance is seuence in which each number is the sum of two preceding ones 
// the first two numbers of fibunacci sequance is 1 and 0 
// fibunncci(2) = [0,1] fibunacci(3) = [0,1,1] 
//fobumacci(7) = [0,1,1,2,3,5,8]

function fibunacci (n){
const fib = [0,1]
for (let i = 2 ; i<n ; i ++){
    fib[i] = fib[i-1] + fib[i-2]
}
  return fib

}

console.log(fibunacci(8)) 