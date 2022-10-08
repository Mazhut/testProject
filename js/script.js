"use strict";

// let a = 5,
//     b = a; //По значению

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; //По ссылке

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// };

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(numbers);
// console.log(newNumbers);

// const add = {
//     d: 17,
//     e: 20
// };

// console.log(Object.assign(numbers, add));
// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'Hello world!';

// console.log(oldArray);
// console.log(newArray);

// const video = ['YouTube', 'Vimeo', 'Rutube'],
//       blogs = ['Wordpress', 'Livejournal', 'Blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

//       console.log(internet);

// function log (a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c); 
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ['a', 'b'];

// const copyArray = [...array];

// array[1] = 'd';

// console.log(array);
// console.log(copyArray);

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};

// newObj.one = 3;

// console.log(q);
// console.log(newObj);