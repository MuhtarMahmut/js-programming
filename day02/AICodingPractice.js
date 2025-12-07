// Create an array of strings and  add 10 employee names to it.
let employees = [
  "John Doe",
  "Jane Smith",
  "Michael Johnson",
  "Emily Davis",
  "Sarah Williams",
  "David Brown",
  "Lisa Anderson",
  "Robert Wilson",
  "Jennifer Taylor",
  "Christopher Lee",
];

// Print the array to the console.
console.log(employees);

// set the first employee name to "Muhtar" and last employee name to "Kuzzat".
employees[0] = "Muhtar";
employees[employees.length - 1] = "Kuzzat";

// Print the updated array to the console.
console.log(employees);

console.log("----------------------------------------------------------------");

// display all the elements of the array in reversed order.
for (let i = employees.length - 1; i >= 0; i--) {
  console.log(employees[i]);
}

console.log("----------------------------------------------------------------");

let numbers = [100, 200, 300, 400, 5, 4, 6, 7, 8, 9, 10, -100, 20000];

// write a program that can display the maximum and minimum numbers from the numbers array. do not use any build-in sort functions.
let maxNumber = numbers[0];
let minNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }

  if (numbers[i] < minNumber) {
    minNumber = numbers[i];
  }
}

console.log("The maximum number is: " + maxNumber);
console.log("The minimum number is: " + minNumber);

console.log("----------------------------------------------------------------");

// Write a program that can sort the numbers array in ascending order. do not use any build-in sort functions.
for (let i = 0; i < numbers.length - 1; i++) {
  for (let j = 0; j < numbers.length - 1 - i; j++) {
    if (numbers[j] > numbers[j + 1]) {
      // Swap elements
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

console.log(numbers);

console.log("----------------------------------------------------------------");

let nums = [1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7];

// write a program that can remove duplicates from the nums array.
let uniqueNums = [];

for (let i = 0; i < nums.length; i++) {
  if (!uniqueNums.includes(nums[i])) {
    uniqueNums.push(nums[i]);
  }
}

console.log(uniqueNums);


