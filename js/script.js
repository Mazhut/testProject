"use strict";

let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num--;
} while (num >= 45);

for (let i = 1; i < 10; i++) {
    // if (num == 53) {
    //     break;
    // }
    if (i === 2) {
       continue;
    }

    console.log(i);
}