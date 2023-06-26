function add1(n1: number, n2: number): number {
  return n1 + n2;
}
// void use for functions that does not return anything
function logResult(num: number): void {
  console.log("logResult " + num);
}

logResult(add1(1, 2));

let combineValue: (a: number, b: number) => number;
combineValue = add1;
console.log("combineValue " + combineValue(2, 2));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result: number = n1 + n2;
  cb(result);
}
addAndHandle(2, 4, (result) => {
  console.log("addAndHandle " + (result + 5));
});
