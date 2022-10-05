"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

const {border, background} = options.colors;
console.log(border);
console.log(background);

// console.log(Object.keys(options).length);

// const playerInfo = {
//     firstName: 'Charles',
//     lastName: 'DeKetelaare',
//     jersey: 90,
//     contractInfo: {
//         salary: "$2.500.000",
//         expiryDate: "30.06.2027"
//     },
//     age: 21
// };

// console.log(Object.keys(playerInfo).length);

// for (let key in playerInfo) {
//     if (typeof(playerInfo[key]) === 'object') {
//         for (let i in playerInfo[key]) {
//             console.log(`Parameter ${i}: ${playerInfo[key][i]}`);
//         }
//     } else {
//         console.log(`Parameter ${key}: ${playerInfo[key]}`);
//     }
// }


// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     }else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter);