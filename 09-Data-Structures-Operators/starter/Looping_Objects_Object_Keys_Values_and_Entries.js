'use strict';
import { flights, italianFoods, mexicanFoods, restaurant } from './data.js';

// looping over property names aka keys

// for (const day of Object.keys(restaurant.openingHours)) {
//   console.log(day);
// }
// property NAMES
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

// property Values
const values = Object.values(restaurant.openingHours);
console.log(values);

// Entire object
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

// key = key "dagen", eftersom nästa del är ett object med två keys i sig så delar vi upp dom
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

/* 

https://jonas.io/assignments/looping-objects-object-keys-values-and-entries.html#11-2

*/
