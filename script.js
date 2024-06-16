"use strict";

// 1. functions of the basic math operators

function add(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber){
    return firstNumber / secondNumber;
}

// ****************
// 2. variables for each of the parts of a calculator operation

let firstNumber;
let secondNumber;
let operator;

// *****************

// 3. function calls one of the above functions on the numbers

function operate(operator, firstNumber, secondNumber){
    switch(operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
        default:
            alert("Unknown operator");
    }
}

// ****************


