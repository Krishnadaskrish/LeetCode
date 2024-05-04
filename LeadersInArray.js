

function LearderOfArray (arr){

    const n = arr.length 
    const lead = []
    const maxVal = arr [n-1]

    for (let i = n - 2 ; i>=0 ; i--){
        if(arr[i]>maxVal){
            lead.push(arr[i])
        }
    }

    return lead

}


const leadar = [16, 17, 4, 3, 5, 2]

console.log(LearderOfArray(leadar))