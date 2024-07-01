function multiplyAll(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            result *= arr[i][j];
        console.log(arr[i][j],'hhh')
        }
    }
    return result;

}

// Test case
console.log(multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]])); 