"use strict";

//Task-4
const formatString = function (string) {

  string.length > 40 ? string = string.slice(0, 40) + "..." :
    string;

  return string;
}


console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);