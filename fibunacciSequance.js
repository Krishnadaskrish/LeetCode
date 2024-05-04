function fibunacci (n) {

    const fib = [0,1]
    for(let i = 2 ; i < n ; i ++){
        fib[i] = fib[i-1] + fib[i-2]// fib of two //(fib of one  ) // populate the value at index [i]
    }
    return fib // returns the febunacci sequance of array


}

console.log(fibunacci(2))
console.log(fibunacci(3))
console.log(fibunacci(7))

// big-o O(n -- Liner becuse there is one forloop ) big o determination 
