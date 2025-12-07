
let school = "CYDEO School";

console.log(school);
console.log(typeof school);

console.log(school.length);

console.log(school.charAt(0));
console.log(school[0]);

console.log(school[school.length-1]);

console.log("-----------------------------");

for(let i = 0; i < school.length; i++){
    console.log(school[i]);
}

console.log("-----------------------------");

school = school.toLowerCase(); // "cydeo school"

console.log(school);

school = school.toUpperCase();

console.log(school);

console.log("-----------------------------");

let expectedResult = "JavaScript";

let actualResult = "JAVASCRIPT";

console.log(expectedResult === actualResult);

console.log(expectedResult.toLowerCase() === actualResult.toLowerCase());

console.log("-----------------------------");

let str = "python python";

//str = str.replace("python", "javascript");
str = str.replace(/python/g, "javascript"); // ng: global flag

console.log(str);

console.log("-----------------------------");

let email = "cydeoschool@gmail.com";

let domain = email.substring(email.indexOf("@")+1, email.lastIndexOf("."));

console.log(domain);

console.log("-----------------------------");

let employeeName = "Breanna";
let employeeSalary = 150_000;

console.log(`My name is ${employeeName}, and my salary is ${employeeSalary} US Dollars.`);

console.log("-----------------------------");



