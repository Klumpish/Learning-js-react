'use strict';
import { flights, italianFoods, mexicanFoods, restaurant } from './data.js';

const rest1 = {
  name: 'capri',
  numGuests: 0,
  //   numGuests: 20,
};
const rest2 = {
  name: 'capribara',
  owner: 'Giovanni Rossi',
};

// OR assignment operator if falsy it will be asigned the value
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// ^nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUSBOAAA>';
rest2.owner &&= '<ANONYMOUSBOAAA>';

console.log(rest1);
console.log(rest2);

/* 
https://jonas.io/assignments/logical-assignments-operators.html
*/
