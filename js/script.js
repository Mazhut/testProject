"use strict";

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello!');
    }
};

// const john = {
//     health: 100
// }

// john.__proto__ = soldier; // Deprecated way for implementing inheritance from Prototype

// Object.setPrototypeOf(john, soldier); //First object which will inherit from, Second one is from which inheritance takes place

const john = Object.create(soldier); //We are creating new prototpye object John that will inherit from Soldier

// console.log(john.armor);
john.sayHello();