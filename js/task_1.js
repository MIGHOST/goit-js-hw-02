"use strict";

// //Task-1

// let logItems = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
// logItems.forEach(function(item, index) {
//     console.table( `${index + 1} ${item}`);
//   });


const logItems = arr => {
    for (let i = 0; i < arr.length; i++) {
      console.log(`${i + 1} - ${arr[i]}`);
    }
  };

  logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
  logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50])