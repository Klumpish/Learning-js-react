const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));

console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

function checkMiddleSeat(seat) {
  //  b and e are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('you got the middle seat');
  } else {
    console.log('You got lucky');
  }
}

checkMiddleSeat('11B');
checkMiddleSeat('24C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fix capitalization in name
const passenger = 'hEffA'; // Heffa
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const passengerName = function (name) {
  const lower = name.toLowerCase();
  const correct = lower[0].toUpperCase() + lower.slice(1);
  return console.log(correct);
};
passengerName('doBbie');

// compare emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);
const annonucement = 'All passengers come to bording door 23, Bording door 23!';
console.log(annonucement.replace('door', 'gate'));
console.log(annonucement.replaceAll('door', 'gate'));
// same ass replaceAll
console.log(annonucement.replace(/door/g, 'gate'));

// booleans
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));
console.log(plane2.startsWith('Air'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('part of the new airbus family');
}

// practice exercise
const checkBaggage = function (items) {
  const itemsLower = items.toLowerCase();
  if (itemsLower.includes('knife') || itemsLower.includes('gun')) {
    console.log('you are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('i have a laptop, some Food and a pocket Knife');
checkBaggage('i have some socks and camera');
checkBaggage('i got some snacks and a gun for protection');

// working with string 3

// split and join
console.log('a+very+nice+string'.split('+'));
console.log('Heffa Mattsson'.split(' '));

const [firstName, lastName] = 'Heffa Mattsson'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('henrik mattsson');

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('test'.padStart(15, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(6654865616));
console.log(maskCreditCard('6444665486615616'));

// repeat
const message2 = 'Bad weather... All Departures Delayed... ';

console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(2);
planesInLine(4);
planesInLine(6);
