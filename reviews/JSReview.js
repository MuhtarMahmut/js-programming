let x;

console.log(x);
console.log(x*3);

x = 5;

console.log(typeof x);

x = true

console.log(typeof x);

console.log("===========================");

let data_from_ui = "2000";

let expected_data_from_json = 2000;

console.log(data_from_ui == expected_data_from_json); // true. ignore the data types.
console.log(data_from_ui != expected_data_from_json);


console.log(data_from_ui === expected_data_from_json); // false. check the data types as well.
console.log(data_from_ui !== expected_data_from_json);


console.log("============================");

let environment = "qa";  // qa, dev, prod

if(environment === "qa"){
    console.log("QA Environment: https://qa.example.com");
}else if(environment === "dev"){
    console.log("DEV Environment: https://dev.example.com");
}else if(environment === "prod"){
    console.log("PROD Environment: https://www.example.com");
}else{
    console.log("Unknown Environment");
}

console.log("============================");

switch (environment) {
    case "qa":
        console.log("QA Environment: https://qa.example.com");
        break;
    case "dev":
        console.log("DEV Environment: https://dev.example.com");
        break;
    case "prod":
        console.log("PROD Environment: https://www.example.com");
        break;
    default:
        console.log("Unknown Environment");
}

console.log("============================");

// create a for loop with 5 iterations and print the iteration number in each iteration.

for(let i=1; i<=5; i++){
    console.log(`Iteration number: ${i}`);
}

console.log("============================");

let countryDropdown = ["USA", "Canada", "UK", "Australia", "India"];

for(let each of countryDropdown){
    console.log(each);
}

console.log("=========================");

let str = "09876a#b#c#defghi$#@!***"

str = str.replace(/\D/g, "");
console.log(str);

let actualHeader = "CYDEO - QA Automation Engineer";
let expectedHeader = "CYDEO - qa automation engineer";

console.log(actualHeader === expectedHeader); // false. check the data types as well.

console.log(actualHeader.toLocaleLowerCase() === expectedHeader.toLocaleLowerCase()); // true. check the data types as well.

console.log(actualHeader);


console.log("=========================");


/*
create a function that can idenity if a number is prime number.
*/

function isPrime(num){
    if(num <= 1){
        return false;
    }
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(5)); // true
console.log(isPrime(6)); // false
console.log(isPrime(7)); // true
console.log(isPrime(8)); // false
console.log(isPrime(9)); // false
console.log(isPrime(10)); // false




