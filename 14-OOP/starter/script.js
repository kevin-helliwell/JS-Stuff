'use strict';
// convention: constructor variables capitalized
// can't use arrow function since no this keyword
// const Person = function (firstName, birthYear) {
//     // Instance properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // Never do this
//     // this.calcAge = function () {
//     //     console.log(2037 - this.birthYear);
//     // };
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// 1. new {} is created
// 2. function is called
// 3. {} linked to prototype
// 4. function automatically returns {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// console.log(jonas instanceof Person); // true

// // Prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype); // true

// console.log(Person.prototype.isPrototypeOf(jonas)); // true
// console.log(Person.prototype.isPrototypeOf(matilda)); // true
// console.log(Person.prototype.isPrototypeOf(Person)); // false

// //better name: .prototypeOfLinkedObjects

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species); // Homo Sapiens Homo Sapiens

// console.log(jonas.hasOwnProperty('firstName')); // true
// console.log(jonas.hasOwnProperty('species')); // false

// console.log(jonas.__proto__);
// // Object .prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__); // null

// console.log(Person.prototype.constructor);

// const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype); // true

// console.log(arr.__proto__.__proto__);
// Array.prototype.unique = function () {
//     return [...new Set(this)];
// };
// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir((x) => x + 1);

// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(this.speed);
};

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(this.speed);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

console.log(car1, car2);

// Car 1
car1.accelerate();
car1.brake();

// Car 2
car2.accelerate();
car2.brake();
