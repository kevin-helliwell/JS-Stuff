/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);
*/

/*let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');*/
//console.log(typeof null);

// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990;
// const job;

// var job = 'programmer';
// job = 'teacher'

// lastName = 'Schmedtmann';
// console.log(lastName);

// Math Operators

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);

// // Assignment Operators

// let x = 10 + 5; // 15
// x += 10; // x = x + 10
// x *= 4; // x = x * 4
// x++;
// x--;
// x--;
// console.log(x);

// // Comparison Operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// Operator Precedence

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// Coding Challenge #1

// // TEST DATA 1

// const markMassTest1 = 78;
// const markHeightTest1 = 1.69;

// const johnMassTest1 = 92;
// const johnHeightTest1 = 1.95;

// const johnBMITest1 = johnMassTest1 / (johnHeightTest1) ** 2;
// const markBMITest1 = markMassTest1 / (markHeightTest1) ** 2;

// const markHigherBMITest1 = markBMITest1 > johnBMITest1;

// console.log(markBMITest1, johnBMITest1, markHigherBMITest1);

// // TEST DATA 2

// const markMassTest2 = 95;
// const markHeightTest2 = 1.88;

// const johnMassTest2 = 85;
// const johnHeightTest2 = 1.76;

// const markBMITest2 = markMassTest2 / (markHeightTest2) ** 2;
// const johnBMITest2 = johnMassTest2 / (johnHeightTest2) ** 2;

// const markHigherBMITest2 = markBMITest2 > johnBMITest2;

// console.log(markBMITest2, johnBMITest2, markHigherBMITest2);

// Strings & Template Literals

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String with
// multiple
// lines`);

// // Taking Decisions: If/Else Statements
// const age = 15;

// if (age >= 18) {
//     console.log('Sarah can start driving license 🚗');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

//Coding Challenge #2 (see assignments.js)

// Type Conversion and Coercion

// type conversion
// const inputYear = `1991`;
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('I am ' + '23' + ' years old');
// console.log('23' - '10' - 3);
// // - converts to number, + converts to string

// console.log('23' > '18');
// // JS converts strings to numbers except for + operator

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// Falsy and Truthy Values

// Falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;
// if (money) {
//     console.log(`Don't spend it all ;)`);
// } else {
//     console.log(`You should get a job!`);
// }

// let height = 0;
// if (height) {
//     console.log(`Yay! Height is defined!`);
// } else { console.log(`Height is undefined`); }

// const age = `18`;
// if (age === 18) console.log(`You just became an adult :D (strict)`);

// if (age == 18) console.log(`You just became an adult :D (loose)`);

// const favorite = Number(prompt(`What's your favorite number?`));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) { // 23 === 23
//     console.log(`Cool! 23 is an amazing number!`);
// } else if (favorite === 7) {
//     console.log(`7 is also a cool number!`);
// } else if (favorite === 9) {
//     console.log(`9 is also a cool number!`);
// }
// else {
//     console.log(`Number is not 23 or 7 or 9`);
// }

// if (favorite !== 23) console.log(`Why not 23?`);

// Boolean Logic & Logical Operators
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B
// console.log(hasDriversLicense && hasGoodVision); // && = AND
// console.log(hasDriversLicense || hasGoodVision); // || = OR
// console.log(!hasDriversLicense); // ! = not

// if (hasDriversLicense && hasGoodVision) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive...");
// }

// const isTired = true; // C

// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive...");
// }

// Switch Statement

// const day = 'monday';

// switch (day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid day');
// }

// // Challenge: write same logic as if/else statements

// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || 'thursday') {
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday' || 'sunday') {
//     console.log('Enjoy the weekend :D');
// } else {
//     console.log('Not a valid day');
// }

// Conditional (Ternary) Operator

// const age = 23;

// const drink = age >= 18 ? 'Wine' : 'Water';
// console.log(drink);

// console.log(`I like to drink ${age >= 18 ? 'Wine' : 'Water'}`);

// Coding Challenge #2

/*
Steve is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44
*/

// My solution

// function calcTip(billValue) {
//     if (billValue >= 50 && billValue <= 300) {
//         return 0.15 * billValue;
//     } else {
//         return 0.2 * billValue;
//     }
// }

// // Sanity check to make sure function works correctly

// console.log(calcTip(100));

// // Test data

// const bills = [125, 555, 44];

// console.log(bills);

// const tips = [];

// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));

// }

// console.log(tips);

// const total = [];

// for (let i = 0; i < bills.length; i++) {
//     total.push(bills[i] + tips[i]);
// }

// console.log(total);

// Instructor solution

// Function expression w/ ternary operator
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// // Arrow function w/ ternary operator
// // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];

// // Array w/ function calls
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);

// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs!
This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meters)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the the full name and respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

TEST DATA: Mark weighs 78 kg and is 1.69m tall.
John weighs 92 kg and is 1.95m tall.

GOOD LUCK :D
*/

// My solution

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         const BMI = this.mass / (this.height * this.height);
//         return BMI;
//     }
// };

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         const BMI = this.mass / (this.height * this.height);
//         return BMI;
//     }
// };
// console.log(john.calcBMI(), mark.calcBMI());

// console.log(`${john.calcBMI() > mark.calcBMI() ? john.fullName : mark.fullName}'s BMI (${john.calcBMI() > mark.calcBMI() ? john.calcBMI() : mark.calcBMI()}) is higher than ${john.calcBMI() > mark.calcBMI() ? mark.fullName : john.fullName}'s BMI (${john.calcBMI() > mark.calcBMI() ? mark.calcBMI() : john.calcBMI()})!`);

// Instructor solution

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }

// };
// // Generates BMI property for both mark and john (calculates and stores BMI for each object)
// mark.calcBMI();
// john.calcBMI();


// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})!`);
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})!`)
// }


// Coding Challenge #4

/* Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values.
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays.

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
    4.1 First, you will need to add up all values in the array. To do the addition, start by creating the variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
    4.2 To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
    4.3 Call the function with the 'totals' array.

    GOOD LUCK :D */


// My solution
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
//     totals.push(tips[i] + bills[i]);
// }
// console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//     let sum = 0;
//     for (i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum / arr.length;
// }

// console.log(calcAverage(totals));

// Instructor solution

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }

// console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         //sum = sum + arr[i];
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }

// console.log(calcAverage([2, 3, 6]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));

