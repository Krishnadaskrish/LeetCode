//bubble soeting of string and number
function BubbleSorting (number){
    for (let i = 0 ;  i< number.length-1 ; i++ ){
        for(let j = 0 ; j<number.length-1-i; j++){
            if (number[j] <number[j+1]){
                [number[j],number[j+1]] =[number[j+1],number[j]] //swaping the element inside the array
            }
        }
    }

    return number
}

const number = [0,0,1,1]
const sortNumbers = console.log(BubbleSorting(number))


function SortingString (string){

    for(let i = 0 ; i<string.length-1 ;i++){
        for(let j = 0; j<string.length-1-i ; j++){
            if(string[j].localeCompare(string[j+1])>0){
                [string[j],string[j+1]] = [string[j+1],string[j]]
            }
        }
    }
    return string

}

const string = ['banana','zmango','pappaya']

const stringSort = console.log(SortingString(string))


function ObjectSorting(object,proprty){

    for (let i = 0 ; i<object.length-1 ; i++){
        for (let j = 0 ; j<object.length-1-i ; j++){
            if (object[j] [proprty]<object[j+1][proprty]){
                [object[j],object[j+1]] = [object[j+1],object[j]]
            }
        }
    }

    return object

}

const obj = [
    {name:'krishnadas',age : 24},
    {name : 'anu' , age : 21}
]

const sort = console.log(ObjectSorting(obj,"name"))