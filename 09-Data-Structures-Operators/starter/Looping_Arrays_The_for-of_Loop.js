'use strict';
import { flights, italianFoods, mexicanFoods, restaurant } from './data.js';

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
// console.log([...menu.entries()]);

/* 
https://jonas.io/assignments/looping-arrays-the-for-of-loop.html
*/
