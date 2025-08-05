'use strict';

const bookings = [];

// default perameters
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers,
) {
  //     // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH12322', 2);
// createBooking('LH12322', 5);
// createBooking('LH12322', undefined, 5000);

// how passing arguments works: value vs reference

const flight = 'LH234';
const jonas = {
  name: 'Jonas schmedtmann',
  passport: 365418914,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH899';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 365418914) {
    alert('checked in');
  } else {
    alert('wrong passport');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

//
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};

newPassport(jonas);
// checkIn(flight, jonas);

// passing by value and passing by reference. js does not have reference

// first-class vs. higher-order functions

/* 
 - First-class functions
 javascript treats functions as first-class citizens
 this means that functions are simply values
 functions are just another "type" of object

 - store functions in variables or properties:
 const add = (a,b) => a + b;
 const counter = {
    value: 23,
    inc: function(){this.value++}
 }

 - Pass functions as arguments to OTHER functions:
 const greet = () => console.log("Hey Jonas")
 btnClose.addEventListener("click", greet)

 - Return functions FROM functions

 - Call methods on functions
 counter.inc.bind(someOtherObject)
*/

// ################

/* 
    - Higher-order functions
    A function that receives another function as an argument, 
    that returns a new function or both
    - this is only possible because of first-class functions

    1) function that receives another function
    the addEventListener above is a higher-order function when
    it takes our greet function in
    we call functions like that Callback functions

    2) Function that returns new function
    function count(){ <--higher-order function
    let counter = 0;
    return function(){ <--returned function
        counter++
    }
}
*/
/* 
136. Functions Accepting Callback Functions 
*/

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higherOrder function
// becouse it takes in a function
const transformer = function (str, fn) {
  console.log(str);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('🖐️');
};
document.body.addEventListener('click', high5);
