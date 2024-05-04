const newarray = [[1, 2, 3,5], [4, 5, 6], [7, 8, 9]];
let val = [];
newarray.forEach((v, i) => {
    v.forEach((w, j) => {
        if(val[j]) {
        val[j] += w;
        } else {
            val[j] = w;
        }
        console.log(val[j] += w)

    })
})
