"use strict";

// 1. functions of the basic math operators

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

// ****************
// 2. variables for each of the parts of a calculator operation

let firstNumber = '';
let secondNumber = '';
let operator = '';
let finish = false;

// *****************

// 3. function calls one of the above functions on the numbers

function operate(operator, firstNumber, secondNumber){
    switch(operator) {
        case "+":
            return add(Number(firstNumber), Number(secondNumber));
        case "-":
            return subtract(Number(firstNumber), Number(secondNumber));
        case "*":
            return multiply(Number(firstNumber), Number(secondNumber));
        case "/":
            return divide(Number(firstNumber), Number(secondNumber));
        default:
            alert("Unknown operator");
    }
}

// ****************

// 4.functions that populate the display when you click the number buttons

const input = document.querySelector(".input");
const resetBtn = document.querySelector(".reset_btn");
const calculator = document.querySelector(".calculator_box");

function clearAll(){
    input.value = "0";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    finish = false;
}

resetBtn.addEventListener("click", clearAll);

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '*', '/'];

function setNumber(event){
    let target = event.target;
    const key = event.target.textContent;

    if(target.tagName !== "BUTTON") return;
    if(target.classList.contains("reset_btn")) return;

    if(digit.includes(key)) {
        if(secondNumber === '' && operator === ''){
            firstNumber += key;
            input.value = firstNumber;
            console.log("1Num = " + firstNumber);
        }
        else if(firstNumber !== '' && secondNumber !== '' && finish){
            secondNumber = key;
            console.log("2Num = " + secondNumber);
            finish = false;
            input.value = secondNumber;
        } 
        else {
            secondNumber += key;
            input.value = secondNumber;
            console.log("2Num = " + secondNumber);
        }

        console.log(firstNumber, secondNumber, operator);
        return;
    }
    if(action.includes(key)) {
        operator = key;
        input.value = firstNumber + operator;
        console.log(firstNumber, secondNumber, operator);
        return
      }

    if(key === '=') {
        if(secondNumber === '') secondNumber = firstNumber;

    input.value = operate(operator, firstNumber, secondNumber);
    console.log("Result = " + input.value);
    finish = true;
    operator = '';
    firstNumber = input.value;
    console.log("firstNumber = " + firstNumber);

    }
}

calculator.addEventListener("click", setNumber);
