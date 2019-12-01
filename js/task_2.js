"use strict";


//Task-2
const calculateEngravingPrice = function(message, pricePerWord) {
    let total = 0;
    const arrayWords = message.split(" ");
    for (const word of arrayWords) {
        total += pricePerWord;
    }
    return total;
}

console.log(calculateEngravingPrice("I won't wait for you to come around", 10));
console.log(calculateEngravingPrice("Be or not to be", 520));
console.log(calculateEngravingPrice("That the night was madly made to say the sing that you can't say tommorow day", 33));




