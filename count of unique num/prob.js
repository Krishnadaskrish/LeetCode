 var removeDuplicates = function(nums) {
    let unique = []
    const arr = nums
    for (let i = 0 ; i<arr.length ; i ++){
        for(let j = 0 ; i<arr.length-1-i; i ++){
            if(arr[i] != arr[j]){
                unique = arr

            }
        }

    }
    return unique
    
};

const remove = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 5]);
console.log(remove);