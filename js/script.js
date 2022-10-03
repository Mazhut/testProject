"use strict";

const str = 'Test';

console.log(str[2] = 'd');

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = 'Some fruit';

console.log(fruit.indexOf('q'));

const logg = 'Hello world';

console.log(logg.slice(6));

console.log(logg.substring(6));

console.log(logg.substr(7));

const wrestler = 'Big Poppa Pump Scott Steiner';
console.log(wrestler.slice(0, 3));
console.log(wrestler.slice(4, 9));
console.log(wrestler.slice(10, 14));
console.log(wrestler.slice(15, 20));
console.log(wrestler.slice(21));

const num = 12.2;
console.log(Math.round(num));

const test = '16.2px';
console.log(parseInt(test));
console.log(parseFloat(test));