'use strict';
import { flights, italianFoods, mexicanFoods, restaurant } from './data.js';
// a map is a datastruktur that we can use to map values to keys

const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Boden, norrland');
rest.set(2, 'dumdump, harads');
console.log(rest.set(3, 'gaay, tornejjooo'));

rest
  .set('categories', `[${restaurant.categories}]`)
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open :D')
  .set(false, 'we are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
rest.set([1, 2], 'Test');
console.log(rest);
console.log(rest.size);

// maps: iteration

const question = new Map([
  ['question', 'what is the bet programing language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'javaScript'],
  ['correct', 3],
  [true, 'correct 😁 '],
  [false, 'try again!'],
]);
console.log(question);

// conver object to map
console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}:${value}`);
}
// const answer = Number(prompt('your answer:'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// convert map to array
console.log([...question]);
console.log('Entries', ...question.entries());
console.log(...question.keys());
console.log(...question.values());
