var lengthOfLastWord = function(s) {
let array = s.trim().split(' ')
console.log(array[array.length-1].length) 
return array[array.length-1].length
}
const inp = "   fly me   to   the moon  "
console.log(lengthOfLastWord(inp))