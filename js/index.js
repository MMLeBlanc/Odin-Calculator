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

// Select buttons and add listeners, as well as set up main number
let operand1 = 0;
let operand2;
let operator = null;

const displayValue = document.getElementById('display');
const numButton = document.getElementsByClassName('number');
const operationButton = document.getElementsByClassName('operator');

for (let i = 0; i < numButton.length; i++) {
    numButton[i].addEventListener('click', e => {
        if (operand1 === 0) {
            displayValue.innerText = e.target.innerText;
            operand1 = parseFloat(displayValue.innerText);
        } else {
            operand1 = (parseFloat(displayValue.innerText) * 10) + parseFloat(e.target.innerText);
            displayValue.innerText += e.target.innerText;
        }
    });
}

for (let j = 0; j < operationButton.length; j++) {
    operationButton[j].addEventListener('click', e => {

        if (e.target.innerText === '=' || operator !== null) {
            displayValue.innerText = Operate(operator, operand2, operand1);
            operand2 = displayValue.innerText;
            operand1 = 0;
            operator = e.target.innerText;
        } else if (e.target.innerText === 'C') {
            operand1 = 0;
            operand2 = 0;
            operator = null;
            displayValue.innerText = 0;
        } else {
            operator = e.target.innerText;
            operand2 = operand1;
            operand1 = 0;
        }
    });
}