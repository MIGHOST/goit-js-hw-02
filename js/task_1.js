"use strict";

// //Task-1

const logItems = arr => {
    for (let i = 0; i < arr.length; i++) {
      console.log(`${i + 1} - ${arr[i]}`);
    }
  };

  logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
  logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50])