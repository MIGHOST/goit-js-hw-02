"use strict";


//Task-3

const findLongestWord = function(string) {
    const array = string.split(' ');
    let longestWord = array[0];
for (let word of array) {
    if (word.length > longestWord.lenght) {
        word = longestWord
    }
    return longestWord;
}
}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); 

console.log(findLongestWord('Google do a roll')); 

console.log(findLongestWord('May the force be with you')); 