'use strict'

var num1 = 0
var num2 = 0
var operator = ''
var x = 10

function onNumClick(elCell) {
    if(!num1) num1 = +elCell.innerText
    else if(operator && !num2) num2 = +elCell.innerText
}

function onOperatorClick(elCell) {
    if(num1 && !num2) operator = elCell.innerText
}

function onCalc() {
    if(num1 && num2 && operator){
        console.log(`${num1} ${operator} ${num2} = ${+num1 + +num2}`)
        num1 = num2 = 0
        operator = ''
    }
}