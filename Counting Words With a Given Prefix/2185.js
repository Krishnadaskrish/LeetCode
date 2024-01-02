

function prefixCount(words, pref) {
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        
        let isPrefix = true;

        for (let j = 0; j < pref.length; j++) {
            if (word[j] !== pref[j]) {
                isPrefix = false;
                break;
            }
        }

        if (isPrefix) {
            count++;
        }
    }

    return count;
   
}


// Example 1
const words1 = ["pay", "attention", "practice", "attend"];
const pref1 = "at";
const output1 = prefixCount(words1, pref1);
console.log("Example 1 Output:", output1);

// Example 2
const words2 = ["leetcode", "win", "loops", "success"];
const pref2 = "code";
const output2 = prefixCount(words2, pref2);
console.log("Example 2 Output:", output2);



