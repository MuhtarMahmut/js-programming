/**
 * Prints greeting messages to the console.
 * 
 * This function logs two messages to the console: 
 * "Hello Programmers" and "Welcome to JavaScript Programming".
 * 
 * @returns {void} This function does not return a value.
 */
function greetings(){
    console.log("Hello Programmers");
    console.log("Welcome to JavaScript Programming");
}

greetings();
greetings();

console.log("----------------------------------------------------------------");


/**
 * Displays the name of a person with a default value of "Adam".
 * 
 * This function logs a message to the console, displaying the name of the person.
 * If no name is provided, it defaults to "Adam".
 * 
 * @param {string} [personName="Adam"] - The name of the person to be displayed.
 * 
 * @returns {void} This function does not return a value.
 */
function displayName(personName = "Adam"){
    console.log(`The name of the person is ${personName}`);
}
displayName();
displayName("John");

console.log("----------------------------------------------------------------");

/**
 * Adds two numbers together, with an optional third number.
 * 
 * This function takes two parameters, num1 and num2, and an optional third parameter, num3.
 * It returns the sum of these three numbers. If num3 is not provided, it defaults to 0.
 * 
 * @param {number} num1 - The first number to be added.
 * @param {number} num2 - The second number to be added.
 * @param {number} [num3=0] - The optional third number to be added. Defaults to 0.
 * 
 * @returns {number} The sum of num1, num2, and num3.
 */
function addNumbers(num1, num2, num3 = 0){
    return num1 + num2 + num3;
}


let result = addNumbers(10, 20);
console.log(result);

let x = addNumbers(10, 20, 30);
console.log(x);