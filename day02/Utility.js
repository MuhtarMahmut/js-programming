function square(x){
    return x * x;
}

function cube(y){
    return y * y * y;
}


function calculate(num1, num2, operator) {
    if (operator === '-') {
        return num1 - num2;
    } else if (operator === '+') {
        return num1 + num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        return num1 / num2;
    } else {
        console.log('Invalid operator');
        return 0;
    }
}


module.exports = {square, cube, calculate}


