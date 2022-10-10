"use strict";

// 01
// let x = 5;
// alert(x++); //answer is 5


// 02
// empty array will be transformed into empty string
// console.log(typeof([] + false - null + true)); // answer is NaN


// 03
// let y = 1;
// let x = y = 2;
// alert(x); // answer is 2


// 04
// let x = [] + 1 + 2;
// console.log(typeof(x)); // answer is string 12


// 05
// alert("1265625"[3]); // answer is 5


// 06
// console.log(2 && 1 && null && 0 && undefined); // answer is null
// И запинается на лжи


// 07
// console.log(!!( 1 && 2 ) === (1 && 2)); // answer is false


// 08
// alert(null || 2 && 3 || 4); // answer is 3
// ИЛИ запинается на правде


// 09
// const a = [1, 2, 3];
// const b = [1, 2, 3];
// console.log(a == b); // answer is false


// 10
// alert(+'Infinity'); // answer is Infinity


// 11
console.log('Ёжик' > 'Яблоко'); // answer is false (per symbol comparison)


// 12
console.log(0 || "" || 2 || undefined || true || false); // answer is 2 