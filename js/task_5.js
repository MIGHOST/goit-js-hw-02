"use strict";
//task-5

const checkForSpam = function (str) {
    let controlStr = str.toLowerCase();
    return controlStr.includes("spam") || controlStr.includes("sale");
}

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));