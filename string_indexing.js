/*
1.indexing
2.trim
3.splice
4.toUpperCase
5.toLowerCase
6.length
*/

// string indexing
let firstName = "Harshit";
console.log(firstName[0]);
let len = firstName.length;
console.log(len);

//spaces are also counted.
firstName = "Harsh  it";
console.log(firstName.length);

// string methods

// trim -> to remove leading and lagging spaces
//string is immutable
console.log(
  "*******************",
  "string mthods  : ",
  "***********************"
);
firstName = "   Harshit   ";
console.log(firstName.length);
let newString = firstName.trim();
console.log(firstName.length);
console.log(newString.length);

// to uppercase
firstName = firstName.toUpperCase();
console.log(firstName);

// to lowercase
firstName = firstName.toLowerCase();
console.log(firstName);

// slicing
firstName = firstName.trim();
let slicedString = firstName.slice(2, 5);
console.log(slicedString);
