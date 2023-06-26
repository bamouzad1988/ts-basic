"use strict";
function add(n1, n2, showResult, resultPhrase) {
    if (showResult) {
        console.log(resultPhrase + (n1 + n2));
    }
    else {
        return n1 + n2;
    }
}
let number1;
number1 = 3;
const number2 = 2.5;
const printResult = true;
const resultPhrase = "result is: ";
add(number1, number2, printResult, resultPhrase);
