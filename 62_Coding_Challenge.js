// Coding challenge #1 :
/*

    Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures. 

    Example : [17, 21, 23] - will print "...17°C in 1st day, 21°C in 2nd day and 23°C in 3rd day..."

    => Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above of the console.

    Use the problem-solving framework : Understand the problem and break it into sub-problems! 

    -> Test data 1 : [17, 21, 23]
       Test data 2 : [12, 5, -5, 0, 4] 

*/

// Solution :
/*
    1. Understanding the problem
        - Array transformed to string, separated by ...
        - What about the day(s) ? Ans : [index + 1]

    2. Breaking up into sub-problems
        - Transform array into string 
        - Transform each element to string with °C
        - Strings need to contain day (index + 1)
        - Add ... between elements and start and end of string 

*/

// ----------------------------------------------------------------------------------------------------------- //

const temp_arr_day_1 = [17, 21, 23];

const temp_arr_day_2 = [12, 5, -5, 0, 4];

// First approach to output the expected string (without using function)
console.log(
  `... ${temp_arr_day_1[0]}°C ... ${temp_arr_day_1[1]}°C ... ${temp_arr_day_1[2]}°C ...`
);
// The above solution is absolutely static in manner, the same program can't work for an array consist of 4 indexes / values

// The solution should be dynamic - use a function : 'printForecast'
const printForecast = function (array) {
  for (let i = 0; i < array.length; i++) {
    var string = "";
    string += `${array[i]}°C in ${i + 1} days ... `;
    // string = string + `${array[i]}°C in ${i + 1} days ... `;
    console.log("..." + string);
  }
  console.log("///..." + string);
};
// Added multiple strings to a bigger string that kept growing after each iteration

// call the function to print the required string in the output console :
printForecast(temp_arr_day_2);
