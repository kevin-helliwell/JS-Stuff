// Activating Strict Mode

'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

// Functions

// function logger() {
//     console.log('My name is Jonas');
// }

// // Calling / Running / Invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');


// Function Declaration

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// // Function Expression

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);

// console.log(age1, age2);

// Function Expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// Arrow Functions
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// Functions Calling Other Functions

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));

// Reviewing Functions

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(1991, "Jonas"));

// console.log(yearsUntilRetirement(1950, "Mike"));

// Coding Challenge #1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters
('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23, and 71. Koalas score 65, 54, and 49.
TEST DATA 2: Dolphins score 85, 54, and 41. Koalas score 23, 34, and 27.

HINT: To calculate average of 3 values, add them all together and divide by 3.
HINT: To check if number A is at least double number B, check for A >= 2*B. Apply this to the team's average scores.
GOOD LUCK! */

// 1, 2

// const calcAverage = (score1, score2, score3) => {
//     const averageScore = (score1 + score2 + score3) / 3;
//     return averageScore;
// }

// // Instructor's Version
// // const calcAverage = (a,b,c) => (a+b+c)/3;

// const avgDolphins1 = calcAverage(44, 23, 71);
// const avgKoalas1 = calcAverage(65, 54, 49);

// const avgDolphins2 = calcAverage(85, 54, 41);
// const avgKoalas2 = calcAverage(23, 34, 27);

// // 3

// const checkWinner = (avgDolphins, avgKoalas) => {
//     if (avgDolphins >= 2 * avgKoalas) {
//         return console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}).`);
//     }
//     else if (avgKoalas >= 2 * avgDolphins) {
//         return console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins}).`);
//     }
//     else {
//         return console.log(`No one wins. (${avgDolphins} vs ${avgKoalas}).`);
//     }
// }

// // 4 & 5

// checkWinner(avgDolphins1, avgKoalas1);
// checkWinner(avgDolphins2, avgKoalas2);

// Introduction to Arrays

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);
// // friends = ['Bob', 'Alice] error

// const firstName = 'Jonas';
// const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// Exercise

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// //console.log(calcAge(years)); NaN error

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// Array Operations [Methods]

// Add elements
// const friends = ['Michael', 'Steven', 'Peter'];
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // Remove elements
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven');
// }

