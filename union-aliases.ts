type stringOrNumber = number | string;
type resultTypeCombine = "as-number" | "as-text";
function combine(
  input1: stringOrNumber,
  input2: stringOrNumber,
  resultType: resultTypeCombine
) {
  let result;
  if (
    (typeof input1 == "number" && typeof input2 == "number") ||
    resultType === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  //   if (resultType === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
}
const combineAges = combine(0, 10, "as-number");
console.log(combineAges);
const combineStringAges = combine("20", "10", "as-number");
console.log(combineStringAges);
const combineNames = combine("bijan ", "amouzad ", "as-text");
console.log(combineNames);

type User = { name: string; age: number };
const u1: User = { name: "Max", age: 30 };
