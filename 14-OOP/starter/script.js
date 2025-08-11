// 'use strict';

// // construktor funktion
// // an arrow funcction wont work cuz it dosnt have this keyword
// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //   Never do this, it will work, but it will clog up after creating to many instances of Person
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };

// const jonas = new Person('jonas', 1991);
// console.log(jonas);

// // 1. new empty object = {} is created {}
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4.function automatically return {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// const jay = 'Jay';

// console.log(jonas instanceof Person);
// console.log(jay instanceof Person);

// // Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas)); //true
// console.log(Person.prototype.isPrototypeOf(Person)); // false

// //.prototypeOfLinkedObjects would be a better name for it

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species);

// console.log(jonas.hasOwnProperty('firstName')); //true
// console.log(jonas.hasOwnProperty('species')); // false

// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__); //object.prototype top of the chain
// console.log(jonas.__proto__.__proto__.__proto__); //null

// console.dir(Person.prototype.constructor);

// const arr = [1, 3, 2, 5, 6, 1, 2]; // same as doing new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// // dont do this, it works but not a good idea when working with others
// // also next version of js might add a method with the same name and it breaks
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const Car = function (model, speed) {
//   this.model = model;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`the ${this.model}'s new speed is ${this.speed}`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.model} is breaking, speed down to ${this.speed}`);
// };

// const bmw = new Car('BMW', 120);
// const Mercedes = new Car('Mercedes', 95);

// // console.log(bmw);
// // bmw.accelerate();
// // bmw.brake();
// // bmw.accelerate();
// // bmw.brake();
// // bmw.accelerate();
// // bmw.brake();
// // bmw.accelerate();
// // bmw.brake();
// // Mercedes.accelerate();
// // Mercedes.brake();
// // Mercedes.accelerate();
// // Mercedes.brake();
// // Mercedes.accelerate();
// // Mercedes.brake();
// // Mercedes.accelerate();
// // Mercedes.brake();

// classes

// class expression
const PerconCl = class {};

// class declaration
class PersonCL {}
