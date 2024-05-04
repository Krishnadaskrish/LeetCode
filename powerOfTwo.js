// function PowerOftwo (n) {

//     if (n < 1){
//         return false
//     }
//     while(n>1){
//         if(n%2 !==0){
//             return false 
//         }

//         n = n/2
        
//     }

//     return true
    

// }
// console.log(PowerOftwo(64))

//big-o O(logn) time reduces to the half so it's an logn


function IsPoweOfBitwise (n) {
    if(n<1){
        return false 
    }

    return (n & (n-1)) == 0
       
   
}
console.log(IsPoweOfBitwise(64))

// Big-O(1) constat time complexity is more optimal
// bitwise operator is more optimal becuse there we're not assigning any loop