/*
1. array is refrence type
2. push
3. pop
4. shift
5. unshift
6. splice - > shallow copy
7. concat 
8. spread operator
9. for loop
10. for of loop
11. for in loop
*/

let arr = [1, "apple", 23.0, "gr"];
console.log(arr);

// to check if it is an array
console.log(Array.isArray(arr));

// push
arr.push("nitish");
console.log(arr);

// pop
arr.pop();
console.log(arr);

// unshift
arr.unshift("capiee");
console.log(arr);

// shift
arr.shift();
console.log(arr);

// array is default pass by reference .

// clonning an array / concating the array.
let array1 = ["first", "second"];
let array2 = array1;
// both are same
if (array1 === array2) {
  console.log("both are same");
}

// copying array by value
let array3 = array1.slice(0);
console.log(array3);

let array4 = [].concat(array1);
console.log(array4);

let array5 = [...array1];
console.log(array5);

// concating array
let array7 = [...array1, ...array2];
console.log(array7);

// for loops
let transArray = [];
for (let i = 0; i < array7.length; i++) {
  //   console.log(array7[i].toUpperCase());
  transArray.push(array7[i].toUpperCase());
}
console.log(transArray);

for (let ele of transArray) {
  console.log(ele);
}

for (let index in transArray) {
  console.log(index, transArray[index]);
}
