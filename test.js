function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return 'Error: Division by zero is not allowed';
    }
}

function calculator(operation, num1, num2) {
    switch (operation) {
        case 'add':
            return `The result is ${add(num1, num2)}`;
        case 'subtract':
            return `The result is ${subtract(num1, num2)}`;
        case 'multiply':
            return `The result is ${multiply(num1, num2)}`;
        case 'divide':
            return `The result is ${divide(num1, num2)}`;
        default:
            return 'Error: Invalid operation';
    }
}

console.log(calculator('add', 5, 3));       // Outputs: The result is 8
console.log(calculator('subtract', 5, 3));  // Outputs: The result is 2
console.log(calculator('multiply', 5, 3));  // Outputs: The result is 15
console.log(calculator('divide', 5, 3));    // Outputs: The result is 1.6666666666666667
console.log(calculator('divide', 5, 0));    // Outputs: Error: Division by zero is not allowed
console.log(calculator('modulus', 5, 3));   // Outputs: Error: Invalid operation