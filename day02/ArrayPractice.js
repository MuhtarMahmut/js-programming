let elements = ["Java", 1, 2.5, true, false, "Python"];

console.log(elements);

console.log("-------------------------------------");

let students = ["Shay", "Yulia", "Aaron"];

console.log(students);

for(let i = 0; i < students.length; i++){
    console.log(students[i]);
}

console.log("-------------------------------------");

for(let student of students){
    console.log(student);
}

console.log("-------------------------------------");

let employees = ["Sukran", "Ahmed", "Jimmy", "Shay", "Mutlu"];

console.log(employees.length);
console.log(employees);

employees[0] = "James";

console.log(employees);

console.log("-------------------------------------");

employees.push("Isabella");

console.log(employees);

employees.unshift("Daniel");

console.log(employees);

console.log("-------------------------------------");

employees.shift();

console.log(employees);

employees.pop();

console.log(employees);
