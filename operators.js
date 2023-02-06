/*
1. comparision operators
2. truthy
3. ternary 
*/
let a = 7;
let b = 8;
console.log(a == b); // false

b = 7;
console.log(a == b); // true

b = "7";
console.log(a == b); // true

console.log(a === b); // false

// != --> ignores type
// !=== ->checks type

//
let firstName = "Nitish"; // truthy
let lastName = ""; // falsy
if (lastName) {
  console.log("truthy");
} else {
  console.log("falsy");
}

// ternary operator
let age = 30;
let elder = age >= 28 ? "Sumit" : "Nitish";
console.log(elder);
