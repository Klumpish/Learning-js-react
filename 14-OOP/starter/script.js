'use strict';

// construktor funktion
// an arrow funcction wont work cuz it dosnt have this keyword
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   Never do this, it will work, but it will clog up after creating to many instances of Person
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('jonas', 1991);
console.log(jonas);

// 1. new empty object = {} is created {}
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4.function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const jay = 'Jay';

console.log(jonas instanceof Person);
console.log(jay instanceof Person);
