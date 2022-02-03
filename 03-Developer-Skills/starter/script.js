// Remember, we're gonna use strict mode in all scripts now!

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperate amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temperature amplitude? Answer: difference between highest and lowest temperature
// - How to compute max and min temperatures?
// - What's a sensor error? And what do we do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// PROBLEM 2
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (temps[i] > max) max = curTemp;
//     if (temps[i] < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     // C) FIX
//     value: Number(prompt('Degrees celsius:')),
//   };
//   // B) FIND
//   console.table(measurement);

//   //  console.log(measurement);
//   //  console.warn(measurement.value);
//   //  console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // A) IDENTIFY
// console.log(measureKelvin());

// Coding Challenge #1

/* Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17,21,23] will print "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."

Create a function 'printForecast' which takes an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17,21,23]
TEST DATA 2: [12,5,-5,0,4]
*/

// My solution

// const printForecast = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`"... ${arr[i]}°C in ${i + 1} days ...`);
//   }
// };

// printForecast([17, 21, 23]);
// printForecast([12, 5, -5, 0, 4]);

// Instructor solution

// 1) Understand the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with C°
// - Strings need to contain day (index + 1)
// - Add ... between elements and start/end of string
// - Log string to console

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}°C in ${i + 1} days ... `;
//   }
//   console.log('...' + str);
// };
// printForecast(data1);
