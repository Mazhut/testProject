"use strict";

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Not equal.');
}


// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Too much');
// } else {
//     console.log('Correct!');
// }

// (num === 50) ? console.log('OK!') : console.log('Error!');

const num = 50;

switch (num) {
    case 49: 
        console.log('Error.');
        break;
    case 100:
        console.log('One hundred.');
        break;
    case 50:
        console.log('Correct!');
        break;
    default:
        console.log('Not this time.');
}