/*
primitive data types
1.number
2.string
3.boolean
4.undefine
5.null
6.BigInt
7.symbol
typeof
String()  -> to typecast into string
Number()  -> to typecast into number 
*/

let age = 30;
let name = "Nitish";
console.log(typeof age);
console.log(typeof name);

// convert number to string
age = String(age);
console.log(typeof age);

// convert string to number
let newNum = "345";
newNum = Number(newNum);
console.log(typeof newNum);
