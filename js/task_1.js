"use strict";

//Task-1

const logItems = (function(item, index, array) {
    let total = 0;
    for (let i = 0; i<array.length; i+=1) {
total += array[i];
    }
return total;
}


console.log(logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']))



logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);