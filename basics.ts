function add(
  n1: number,
  n2: number,
  showResult: boolean,
  resultPhrase: string
) {
  if (showResult) {
    console.log(resultPhrase + (n1 + n2));
  } else {
    return n1 + n2;
  }
}
let number1: number;
number1 = 3;
const number2 = 2.5;
const printResult = true;
const resultPhrase = "result is: ";
add(number1, number2, printResult, resultPhrase);
