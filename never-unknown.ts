// it can hold evry thing

let userInput: unknown;
let userInput1: any;
let userName: string;

userInput = 5;
userInput = "reza";
userName = userInput1;
// userName = userInput; throw error

function generateError(message: string, code: number): never {
  throw { message, code };
}

generateError("some error", 500);
