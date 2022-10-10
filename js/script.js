"use strict";

// To String

//1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2)
console.log(typeof(5 + ''));

const num = 5;
console.log("https://www.vk.com/catalog/" + num);

const fontSize = 26 + 'px';


// To Number

// 1)
console.log(typeof(Number('16')));

// 2)
console.log(typeof(+'5'));

// 3)
console.log(typeof(parseInt('15px',10)));

let answer = +prompt('Hello, what is your name?', '');


// To Boolean

// 0, '', null, undefined, NaN => transforms to false
// everything else is true

// 1)
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

// 2)
console.log(typeof(Boolean(null)));

// 3)
console.log(typeof(!!'4444'));