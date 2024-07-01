function Pair (arrtarger) {
    let left = 0 
    let right = arr.length-1
    arr.sort((a,b)=> a-b)
    while(left<right){
        const result = arr[left] + arr[right]

        if (result == target){
            return console.log(arr[left],arr[right])
        }else if (result < target){
             left ++
        }else{
             right --
        }
    }
}




let arr = [2, 7, 11, 15, 1, 8, 3, 6, 4, 10];
let target = 9
Pair(arr,target)