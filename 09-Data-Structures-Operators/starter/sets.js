'use strict';
import { flights, italianFoods, mexicanFoods, restaurant } from './data.js';

// a set is just a collections of uniqe values

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);

console.log(new Set('Jonas'));

// working with sets
// size
console.log(ordersSet.size); // same as lenght
console.log(ordersSet.has('Pizza')); // true like include
console.log(ordersSet.has('bread')); // false

ordersSet.add('Garlic Bread'); //add
ordersSet.add('Garlic Bread'); //add
ordersSet.delete('Risotto'); //remove
// ordersSet.clear(); //clears the set
console.log(ordersSet);
// in set there are no indexes

for (const order of ordersSet) console.log(order);

//main use case, to remove dublicate from a

const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size,
);
console.log(new Set('Heffamattsson').size);

/* 121. New Operations to Make Sets Useful! */
/* 121. New Operations to Make Sets Useful! */

console.log(italianFoods, mexicanFoods);

// intersection method makes a new set with the items that are in both sets

const commonFoods = italianFoods.intersection(mexicanFoods);
// console.log('Intersection:', commonFoods);
console.log('Intersection: items that are in both', [...commonFoods]);

// union method - gives all elements of both sets but no dublicates
const italianMexicanFusion = italianFoods.union(mexicanFoods);

console.log('Union: all but no dublicates', italianMexicanFusion);

// console.log([...new Set([...italianFoods, ...mexicanFoods])]);

// difference method checks what elements are pressent  in the first set but not the second
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log(
  'Difference italian:checks unique food in first',
  uniqueItalianFoods,
);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Difference Mexican', uniqueMexicanFoods);

// symetric method give us the uniqe food in both - symmetricDifference
const superunique = italianFoods.symmetricDifference(mexicanFoods);
console.log('symetric: uniqe food in both ', superunique);

/*  */
// isDisjointFrom -  takes a set and returns a boolean indicating if this set has no elements in common with the given set. "true" if this set has no elements in common with the other set, and "false" otherwise.
console.log(
  'isDisjointFrom: true if this set has no elements in common with the other set',
  italianFoods.isDisjointFrom(mexicanFoods),
);
/*  */

// isSubsetOf() - takes a set and returns a boolean indicating if all elements of this set are in the given set. "true" if all elements in this set are also in the other set, and "false" otherwise.
console.log(
  'isSubsetOf: true if all elements in this set are also in the other',
  italianFoods.isSubsetOf(mexicanFoods),
);
/*  */

/*  */
// isSupersetOf - takes a set and returns a boolean indicating if all elements of the given set are in this set. "true" if all elements in the other set are also in this set, and "false" otherwise.
console.log(
  'isSupersetOf: true if all elements in the other set are in this set',
  italianFoods.isSupersetOf(mexicanFoods),
);
/*  */
