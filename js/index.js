/**
 * Name: Add
 * Parameters: 2 floats
 * Return: sum of the 2 parameters
 */
function Add(num1, num2) {
    return num1 + num2;
}

/**
 * Name: Subtract
 * Parameters: 2 floats
 * Return: difference of the 2 parameters
 */
function Subtract(num1, num2) {
    return num1 - num2;
}

/**
 * Name: Multiply
 * Parameters: 2 floats
 * Return: product of the 2 parameters
 */
function Multiply(num1, num2) {
    return num1 * num2;
}

/**
 * Name: Divide
 * Parameters: 2 floats
 * Return: dividend of the 2 parameters
 */
function Divide(num1, num2) {
    if (num2 === 0) {
        return 'Error: Cannot divide by 0';
    } else {
        return num1 / num2;
    }
}

/**
 * Name: Operate
 * Parameters: operator and 2 floats
 * Return: return value of one of the above functions
 */
function Operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return Add(num1, num2);
        case '-':
            return Subtract(num1, num2);
        case '*':
            return Multiply(num1, num2);
        case '/':
            return Divide(num1, num2);
    }
}