"use strict";
function add1(n1, n2) {
    return n1 + n2;
}
// void use for functions that does not return anything
function logResult(num) {
    console.log("logResult " + num);
}
logResult(add1(1, 2));
let combineValue;
combineValue = add1;
console.log("combineValue " + combineValue(2, 2));
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(2, 4, (result) => {
    console.log("addAndHandle " + (result + 5));
});
