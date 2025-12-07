/*
const utility = require("./Utility.js"); // imports everything

let result = utility.square(9);
console.log(result);

result = utility.cube(3);
console.log(result);

result = utility.calculate(10, 5, '+');
console.log(result);
*/

const { calculate, square } = require("./Utility.js");

// import {calculate, square } from "./Utility.js"; 

let result = calculate(10, 5, "*");
console.log(result);

result = square(9);
console.log(result);


/*
../: ouside the current directory

./: current directory
*/



