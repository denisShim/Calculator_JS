"use strict";

// 1. functions of the basic math operators

function add(a, b){
    // return console.log("OTVET")
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
const btnArray = (Array.from(document.querySelectorAll("button"))).map(item => item.innerHTML);
const calculator = document.querySelector(".calculator_box");
// console.log(btnArray)

// for(const btn of btnArray){
//     console.log(btn.textContent);
// }

function clearAll(){
    input.value = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
}

resetBtn.addEventListener("click", clearAll);


const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '*', '/'];

// calculator.onclick = (event) => {
//     if(event.target.tagName != "BUTTON") return;
//     if(event.target.classList.contains("reset_btn")) return;
//     input.value = "";

//     const key = event.target.textContent;
//     if(digit.includes(key)) {
//         firstNumber += key;
//         console.log(firstNumber)
//     }

// }

// код по ютубу
function setNumber(event){
    let target = event.target;
    const key = event.target.textContent;

    if(target.tagName != "BUTTON") return;
    if(target.classList.contains("reset_btn")) return;
    input.value = "";

    if(digit.includes(key)) {
        if(firstNumber == '' || operator == ''){
            firstNumber += key;
            input.value = firstNumber;
            console.log("1Num = " + firstNumber);
        } else if(firstNumber != '' && operator != '') {
            secondNumber += key;
            input.value = secondNumber;
            console.log("2Num = " + secondNumber);

        }
    }

    if(action.includes(key)) {
        if(firstNumber != '' && secondNumber == '' && operator == '') {
            operator = key;
            input.value = operator;
            console.log(operator);
        }
    }


    if(key == '=') {
        if(firstNumber !== '' && secondNumber !== '' && operator !== ''){
            input.value = operate(operator, firstNumber, secondNumber);
        }
    }

}


/*
function setNumber(event){
    let target = event.target;
    let key = event.target.textContent;

    if(target.tagName != "BUTTON") return;

    if(target.textContent == "C"){
        input.value = "";
        firstNumber = "";
        secondNumber = "";
    }

    if(btnArray.includes(key)) {
        if(secondNumber == "" && operator == ""){
            firstNumber += key;
            input.value += firstNumber;
            console.log(firstNumber)
        }

    }

    if(target.textContent == "+" && input.value != ""){
        firstNumber = input.value;
        operator = target.textContent;
        input.value = "+";
        console.log(firstNumber,operator);
    }
    
    if(target.textContent == "=" ||
    target.textContent == "+" || 
    target.textContent == "*" || 
    target.textContent ==  "/" ||
    target.textContent ==  "-" ||
    target.textContent == "C") return;

    

    return input.value += target.textContent;
}
*/

// setNumber(btnArray)
calculator.addEventListener("click", setNumber);
