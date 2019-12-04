"use strict";
//task-6

let numbers = [];
let input;
let total = 0;
do {
    input = prompt("Input the number",'');
    let inputNum = Number(input);
    if (Number.isNaN(inputNum)) {
        alert("Your input not a number");
        continue;
    } if (inputNum !== null) {
        numbers.push(inputNum);
    }
     
}

while (input !== null);

if (numbers.length) {
    
for (let number of numbers) {
 total += number;
}
console.log(`Amount - ${total}`)

}



