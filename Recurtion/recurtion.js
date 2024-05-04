// recurtion is the solution deoends upon the solution to samaller instances of the same problem 
// recurtion when function call it's self,its for simplify the solution
// every recursive solution need to have an base case a condition thet terminate the recurtion if we dont have one it will cause an infinate loop


// recursive in fibonacci sequence  
//fiqure out how to break down the problem with smaller vertion of the same problem 
// idendify the base case of the recursion 


function Recursivefebunacci (n) {
    if(n<2){
        return n
    } // without the basecase the recursive loop will execute infinately ; this will exit from the case after it satisfy the condition 

    return Recursivefebunacci(n-1) + Recursivefebunacci(n-2) // infinate excution so there has to be base case to stop it

 
}

console.log(Recursivefebunacci(6))