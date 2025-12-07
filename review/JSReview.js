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

// Word Break Problem Solution
// Determines if a string can be segmented into dictionary words

function wordBreak(s, wordDict) {
    // Convert dictionary array to Set for O(1) lookup
    const wordSet = new Set(wordDict);
    const n = s.length;
    
    // dp[i] represents whether substring s[0...i-1] can be segmented
    const dp = new Array(n + 1).fill(false);
    dp[0] = true; // Empty string is always segmentable
    
    // Check each substring ending at position i
    for (let i = 1; i <= n; i++) {
      // Try all possible starting positions j
      for (let j = 0; j < i; j++) {
        // If substring up to j is segmentable and remaining part is in dictionary
        if (dp[j] && wordSet.has(s.substring(j, i))) {
          dp[i] = true;
          break; // No need to check other j positions for this i
        }
      }
    }
    
    return dp[n];
  }
  
  // Test cases with the provided dictionary
  const dictionary = ["i", "like", "sam", "sung", "samsung", "mobile", "ice", "cream", "icecream", "man", "go", "mango"];
  
  // Test 1: "ilike" -> should return true ("i like")
  console.log("Input: ilike");
  console.log("Output:", wordBreak("ilike", dictionary) ? "Yes" : "No");
  console.log("");
  
  // Test 2: "ilikesamsung" -> should return true ("i like samsung" or "i like sam sung")
  console.log("Input: ilikesamsung");
  console.log("Output:", wordBreak("ilikesamsung", dictionary) ? "Yes" : "No");
  console.log("");
  
  // Additional test cases
  console.log("Input: sammobile");
  console.log("Output:", wordBreak("sammobile", dictionary) ? "Yes" : "No"); // true: "sam mobile"
  console.log("Input: mangoicecream");
  console.log("Output:", wordBreak("mangoicecream", dictionary) ? "Yes" : "No"); // true: "mango icecream"
  console.log("Input: ilikeicecream");
  console.log("Output:", wordBreak("ilikeicecream", dictionary) ? "Yes" : "No"); // true: "i like ice cream"
  console.log("Input: impossible");
  console.log("Output:", wordBreak("impossible", dictionary) ? "Yes" : "No"); // false
  

  console.log("----------------------------------");

  function countDistinctSubstrings(str) {
    const n = str.length;
    let count = 0;
  
    // Sliding window with two pointers
    let left = 0;
    const lastIndex = new Map(); // stores last index of each character
  
    for (let right = 0; right < n; right++) {
      const ch = str[right];
  
      // If character already present in current window,
      // move left just after its last occurrence
      if (lastIndex.has(ch) && lastIndex.get(ch) >= left) {
        left = lastIndex.get(ch) + 1;
      }
  
      // Update last seen index of current character
      lastIndex.set(ch, right);
  
      // All substrings ending at 'right' and starting from any index in [left, right]
      // have all distinct characters. Their count is (right - left + 1).
      count += right - left + 1;
    }
  
    return count;
  }
  
  // Example usage:
  console.log(countDistinctSubstrings("gffg")); // 6
  console.log(countDistinctSubstrings("gfg"));  // 5
  