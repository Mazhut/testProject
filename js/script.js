"use strict";

const arr = [61, 25, 33, 16, 8, 4];

// Quick Sort
arr.sort(compareNum);
console.log(arr);

function compareNum(num1, num2) {
    return num1 - num2;
}

// arr[99] = 15;
// console.log(arr.length);

// arr.pop();

// console.log(arr);

// arr.push(16);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(`Element #${i+1}: ${arr[i]}`);
// }

// for (let value of arr) {
//     console.log(`${value}`)
// };

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} inside of array ${arr}`);
// });

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));