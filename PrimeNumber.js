// problem give a natuaral number 'n' determine if number is prime or not
// a prime number is a natural number greater  than 1 that is not a product of two smaller number

//isPrime(5) = 1*5 or 5*1 (true)

function PrimeNumber (n) {

        if(n<2){
            return false
        }

        for(let i = 2 ; i<= Math.sqrt(n) ; i ++){
            if(n%i === 0){
                return false 
            }
        }
        return true
    
}

console.log(PrimeNumber(1))

// big-O o(n) - liner there is one forloop time complexity will be liner 
// O(sqrt(n)) less time complexity than the O(n) the proposion will be lesser than the O(n) 