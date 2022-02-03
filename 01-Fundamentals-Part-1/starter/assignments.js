// LECTURE: Values and Variables
/*
let country = "United States";
let continent = "North America";
let population = "300000000";

console.log(country);
console.log(continent);
console.log(population);
*/

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

// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement!

GOOD LUCK*/

// const markMassTest2 = 95;
// const markHeightTest2 = 1.88;

// const johnMassTest2 = 85;
// const johnHeightTest2 = 1.76;

// const markBMITest2 = markMassTest2 / (markHeightTest2) ** 2;
// const johnBMITest2 = johnMassTest2 / (johnHeightTest2) ** 2;

// const markHigherBMITest2 = markBMITest2 > johnBMITest2;

// console.log(markBMITest2, johnBMITest2, markHigherBMITest2);

// if (markBMITest2 <= johnBMITest2) {
//     console.log(`John's BMI is higher than Mark's!`);
//     console.log(`John's BMI (${johnBMITest2}) is higher than Mark's (${markBMITest2})!`);
// }
// else {
//     console.log(`Mark's BMI is higher than John's!`);
//     console.log(`Mark's BMI (${markBMITest2}) is higher than John's (${johnBMITest2})!`);
// }

// Coding Challenge #3

/* There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

1. Calculate the average score for each team, using the test data below.
2. Compare the teams' average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means that they have the same average score).

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and at the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks.
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108, and 89. Koalas score 88, 91, and 110.
TEST DATA BONUS 1: Dolphins score 97, 112, and 101. Koalas score 109, 95, and 123.
TEST DATA BONUS 2: Dolphins score 97, 112, and 101. Koalas score 109, 95, and 106.

GOOD LUCK :D
*/

// Coding Challenge #3 Parts 1 and 2

// const DolphinsAverageScore = (96 + 108 + 89) / 3;
// const KoalasAverageScore = (88 + 91 + 110) / 3;

// const DolphinsWin = DolphinsAverageScore > KoalasAverageScore;

// Coding Challenge #3 Bonus 1

// const DolphinsAverageScore = (97 + 112 + 101) / 3;
// const KoalasAverageScore = (109 + 95 + 123) / 3;
// const DolphinsWin = DolphinsAverageScore > KoalasAverageScore;

// console.log(DolphinsAverageScore);
// console.log(KoalasAverageScore);
// console.log(DolphinsWin);

// if (DolphinsAverageScore && KoalasAverageScore >= 100) {
//     if (DolphinsAverageScore === KoalasAverageScore) {
//         console.log("It's a draw!");
//     } else if (DolphinsWin === true) {
//         console.log('Dolphins win!');
//     } else if (DolphinsWin === false) {
//         console.log("Koalas win!");
//     }
// } else {
//     console.log("Nobody won!");
// }

// Coding Challenge #3 Bonus 2

// const DolphinsAverageScore = (97 + 112 + 101) / 3;
// const KoalasAverageScore = (109 + 95 + 106) / 3;
// const DolphinsWin = DolphinsAverageScore > KoalasAverageScore;

// console.log(DolphinsAverageScore);
// console.log(KoalasAverageScore);
// console.log(DolphinsWin);

// if (DolphinsAverageScore && KoalasAverageScore >= 100) {
//     if (DolphinsAverageScore === KoalasAverageScore) {
//         console.log("It's a draw!");
//     } else if (DolphinsWin === true) {
//         console.log('Dolphins win!');
//     } else if (DolphinsWin === false) {
//         console.log("Koalas win!");
//     }
// } else {
//     console.log("Nobody won!");
// }

// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating at a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement :P If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430.

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300

GOOD LUCK :D
*/

// bill = 275;

// const tip = bill >= 50 && bill <= 300 ? .15 * bill : .2 * bill

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`);
