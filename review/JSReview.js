let s = "Hello World!";

s = null;

let num;

num = 10.5;

console.log(num);

console.log(typeof num);

console.log("---------------------------------");

let actualData = "100.5";  // string

let expectedData = 100.5; // number

console.log(actualData == expectedData); // true ---> ignores the data type

console.log(actualData === expectedData); // false ---> does not ignore the data type

console.log(actualData !== expectedData);


console.log("---------------------------------");

let browser = "chrome";

if(browser === "chrome"){
    console.log("Selected browser is chrome");
}else if(browser === "firefox"){
    console.log("Selected browser is firefox");
}else if(browser === "safari"){
    console.log("Selected browser is safari");
}else{
    console.log("Selected browser is not supported");
}

console.log("---------------------------------");

switch(browser){
    case "chrome":
        console.log("Selected browser is chrome");
        break;
    case "firefox":
        console.log("Selected browser is firefox");
        break;
    case "safari":
        console.log("Selected browser is safari");
        break;
    default:
        console.log("Selected browser is not supported");
}

console.log("---------------------------------");

for(let i = 1; i <= 10; i++){
    console.log(i);
}

console.log("---------------------------------");

let str = "JAVASCRIPT";

for(let eachChar of str){
    console.log(eachChar);
}


console.log("---------------------------------");

let text = "abcde123456fghijk89lmnop0"; // \d \w \s ...

text = text.replace(/\d/g, "");

console.log(text);

console.log("---------------------------------");

let actualTitle = "Self Enrollment Portal";

let expectedTitle = "self enrollment portal";

console.log(actualTitle.toLocaleLowerCase() === expectedTitle.toLocaleLowerCase());

console.log(actualTitle);
console.log(expectedTitle);

console.log(actualTitle === expectedTitle);

console.log(`The actual title of the page is ${actualTitle}, but the expected title is ${expectedTitle}.`);

console.log("---------------------------------");

let elements = ["Java", 1, 2.5, true, false, "Python"];

console.log(elements);

// use for loop to access each elemnt in the array

for(let element of elements){
    console.log(element);
}

console.log("---------------------------------");

let uniques = new Set( [1,1,1,1,2,2,2,3,3,3,3,4,4,4,5,5,5,5] );

console.log(uniques);

console.log("---------------------------------");

let map = {name: "John Doe", age: 30, city: "New York"};

console.log(map);

console.log("---------------------------------");

/*
Create a function that can take an array and return a new array that contains the elements in the reversed order.

Example:
    reverseArray([1, 2, 3, 4, 5]) ===> [5, 4, 3, 2, 1]
*/

function reverseArray(arr){
    let reversedArr = [];
    for(let i = arr.length - 1; i >= 0; i--){
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}

console.log("---------------------------------");

// come back 11:55 AM EST