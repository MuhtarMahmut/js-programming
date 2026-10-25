
for(let i = 0; i < 5; i++){
    console.log("Hello CYDEO");
}

console.log("----------------------------");

for(let i = 1; i <= 10; i--){
    console.log(i);
    if(i == 5){
        break; // terminates the loop
    }
}


console.log("----------------------------");

for(let i = 1; i <= 10; i++){
    if(i == 3 || i == 7 || i == 9){
        continue; // skips the iteration
    }
    console.log(i);
}

