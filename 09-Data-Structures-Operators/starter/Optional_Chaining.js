'use strict';
import { flights, italianFoods, mexicanFoods, restaurant } from './data.js';

// optional chaining
console.log(restaurant.openingHours?.fri?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// kollar om något finns inna den kallas
// methods optinoal chaining

console.log(restaurant.order?.(0, 1) ?? 'method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'method does not exist');

// Arrays
const users = [{ name: 'jonas', email: 'hello@jonas.io' }];

console.log(users[0]?.name ?? 'user array empty');

/* 
https://jonas.io/assignments/optional-chaining.html
*/
