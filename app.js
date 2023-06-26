"use strict";
// it can hold evry thing
let userInput;
let userInput1;
let userName;
userInput = 5;
userInput = "reza";
userName = userInput1;
// userName = userInput; throw error
function generateError(message, code) {
    throw { message, code };
}
generateError("some error", 500);
