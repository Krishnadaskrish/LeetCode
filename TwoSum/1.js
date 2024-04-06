function twoSum (num,target) {
    const numIndices = new Map()



    for (let i = 0 ; i < num.length ; i++){
        const complement = target - num[i]
        console.log(complement,'sx')

        if(numIndices.has(complement)){
            return[numIndices.get(complement),i]
        }

      numIndices.set(num[i],i)

    }
    
    return []
}

const nums2 = [3, 2, 3];
const target2 = 6;
console.log(twoSum(nums2, target2))