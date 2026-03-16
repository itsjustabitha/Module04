let one = 1;
let two = 2;
let three = 3;
let four = 4;
let five = 5;
let six = 6;    
let seven = 7;
let eight = 8;
let nine = 9;
let zero = 0;
let decimal = ".";
let equals = "=";
let add = "+";  
let subtract = "-";
let multiply = "*";
let divide = "/";
let percentage = "%";
let clearEntry = "CE";
let clear = "C";

// Grab the screen element
const screen = document.getElementById('screen');

// Adds a number or character to the screen
function appendNumber(value) {
    screen.textContent += value;
}

// Clears everything off the screen
function clearDisplay() {
    screen.textContent = '';
}

// Removes only the last character
function deleteLast() {
    screen.textContent = screen.textContent.slice(0, -1);
}

// // Clears the last entry (same as clearDisplay for now)
// function clearEntry() {
//     screen.textContent = '';
// }

// Adds an operator to the screen
function setOperator(operator) {
    screen.textContent += operator;
}

// Calculate result
function calculate() {
    screen.textContent = Function('return ' + screen.textContent)();
}