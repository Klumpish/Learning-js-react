'use strict';

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log("i can drive :D")


const interface = 'Audio' */

/* 
function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    console.log(apples,oranges);
    const juice = `juice with ${applePieces} apples and ${orangePieces} oranges.`
    return juice;
}

console.log(fruitProcessor(2,3));
 */

/* Write your code below. Good luck! 🙂 */
/* 
let calcAverage = (first, second, third) => {return Math.round((first + second + third) / 3)}
let scoreDolphins = calcAverage(44,23,71)
let scoreKoalas = calcAverage(65,54,49)
console.log(scoreDolphins)
console.log(scoreKoalas)
function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins > avgKoalas){
        console.log("Dolphins win!");
    } if (avgDolphins === avgKoalas){
        console.log("No team wins...");
    }else{
        console.log("Koalas win!")
    }
}

checkWinner(scoreDolphins,scoreKoalas) */

//  exercise
/* 
const calcAge = function (birthYear){
    return 2025 - birthYear;
}

const years = [1990,1967,2002,2010,1989];

const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length - 1])

console.log(age1,age2,age3) */
/* 
const friends = ['michael', 'steven', 'peter']
const newLength = friends.push('jay')

console.log(friends)
console.log(newLength)

friends.unshift('John')
console.log(friends)

friends.pop()
const popped = friends.pop()
console.log(popped)
console.log(friends)

friends.shift()
console.log(friends)

console.log(friends.indexOf('steven'))
console.log(friends.includes('steven')) */
/* 
function calcTip(bill){
    if (bill >= 50 && bill <= 300 ){
        return bill * 0.15
    } else {
        return bill * 0.20
    }

}

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]
const totals =[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]] */

// const jonas ={
//     firstName:'Jonas',
//     lastName:'Schmedtmann',
//     age: 2025-1989,
//     job: 'developer',
//     friends: ['Hcz','Delta','Jenny']
// };

// // const intrestedIn = prompt('what do you want to know about Jonas? choose between')

// // if (jonas[intrestedIn]){
// //     console.log(jonas[intrestedIn])
// // } else {
// //     console.log('Wrong request!')
// // }

// // add to object
// jonas.location = 'Sweden';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas)


// // challange

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[1]}`)
/* 
const jonas ={
    firstName:'Jonas',
    lastName:'Schmedtmann',
    birthYear: 1989,
    job: 'developer',
    friends: ['Hcz','Delta','Jenny'],
    hasDriveersLicense: true,

    // calcAge: function(birthYear){
    //     return 2025 - birthYear;
    // }

    // calcAge: function(){
    //     return 2025 - this.age;
    // }

    calcAge: function(){
        this.age = 2025 - this.birthYear;
        return this.age;
    },
    getInfo: function(){
        let license = this.hasDriveersLicense ? "has a driver's license" : "has no driver's license"
        return `${this.firstName} is a ${this.calcAge()} old ${this.job}, and he ${license}`
    }

};

// console.log(jonas.calcAge())
// console.log(jonas.age)

console.log(jonas.getInfo()) */

// for loop keeps running while condition is true
// for (let rep = 1; rep <= 10; rep++){
//     console.log("lifting weights repetition"+ " " + rep)

// }

const jonasArray =[
    'Jonas',
    'Schmedtmann',
    2025-1991,
    'developer',
    ['Michael','Peter','Steven']

];
/*
const types = []

for (let i = 0; i < jonasArray.length ; i++){
    console.log(jonasArray[i], typeof jonasArray[i])

    // types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i])
}

console.log(types)

const years = [1991,2007,1969,2020];
const ages = []

for (let i = 0; i < years.length; i++){
    ages.push(2025 - years[i]);
}
console.log(ages) */

/* for (let i = 0; i < jonasArray.length ; i++){
    if(typeof jonasArray[i] !== 'string') continue;

    console.log(jonasArray[i], typeof jonasArray[i])

}
console.log('---Break on number---')
for (let i = 0; i < jonasArray.length ; i++){
    if(typeof jonasArray[i] === 'number') break;

    console.log(jonasArray[i], typeof jonasArray[i])

} *//*
for (let i = jonasArray.length - 1; i >= 0; i-- ){
    console.log(i,jonasArray[i])
}

for (let exercise = 1; exercise < 4; exercise++){
    console.log("------------- Starting exercise" +" "+ exercise)

    for (let rep = 1; rep <6; rep++){
        console.log(`Lifting weight repetition ${rep}` )
    }
} */

/* let rep = 1;

while (rep <= 10) {
    // console.log(`Lifting weight repetition ${rep}` )
    rep++
    
} */

/* let dice = Math.trunc(Math.random() * 6) + 1

while (dice !== 6){
    console.log(`you rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1
    if (dice === 6) console.log('loop is about to end...')
} */

    const calcTip = function (bill) {
        return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    }

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

for (let i = 0; i < bills.length - 1; i++) {
    tips.push(calcTip(bills[i]))
    totals.push(bills[i] + tips[i])
    
}

console.log(tips)
