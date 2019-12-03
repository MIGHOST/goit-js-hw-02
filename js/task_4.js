"use strict";

//Task-4

const formatString = function(string) {
const add ="...";
let change;
if(string.length >40) {
    change = string.slice(0,40) + add;
} else {
    change = string;
}
return change;
} 

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);