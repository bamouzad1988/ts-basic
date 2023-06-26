const person1: {
  name: string;
  age: number;
  stringArray: string[];
  role: [number, string];
  anyArrayType: any[];
  anyType: any;
} = {
  name: "bijan",
  age: 33,
  stringArray: ["a", "b"],
  role: [2, "b"],
  anyArrayType: ["asas", 2, 2, 3, "asdsad"],
  anyType: { ass: "sas" },
};
// push is ok and it is an exception
person1.role.push("dddd");

// person1.role = [4, "ssdsd", sadsd]; trouw erroe

// string array
let myArray: string[];
myArray = ["sasd", "fsdvsd"];
console.log(person1.name);

const person2 = {
  name: "bijan",
  age: 33,
};
console.log(person2.name);

// enum------------------------
enum role {
  admin = "ADMIN",
  readOnly = "READ-ONLY",
  author = "AUTHOT",
}
const person3 = {
  role: role.admin,
};
if (person3.role === "ADMIN") {
  console.log(person3.role);
}
